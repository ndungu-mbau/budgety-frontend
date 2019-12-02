import React, { Component } from "react"
import Navbar from "../../components/navbar"

import Table from "./table"
import Form from "./form"

import { get, post } from "../../utils/requests"

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

class Home extends Component{
  state = {
    incomes:[],
    expenses:[],
    me:{}
  }

  async componentDidMount(){
    const { data : me } = await get('/auth/me')
    const { data: entries } = await get('/entries')

    const incomes = entries.filter(entry => entry.type === "income")
    const expenses = entries.filter(entry => entry.type === "expense")

    this.setState({ incomes, expenses, me })
  }

  onSave = async entry => {
    const { type } = entry
    const { data } = await post("/entries", entry)

    if(type === "income"){
      this.setState(prev => ({
        ...prev,
        incomes: [...prev.incomes, data]
      }))
    } else {
      this.setState(prev => ({
        ...prev,
        expenses: [...prev.expenses, data]
      }))
    }
  }

  render(){
    const { incomes, expenses, me } = this.state

    const totalIncome = incomes.reduce((sum, inc) => sum += inc.amount, 0)
    const totalExpenses = expenses.reduce((sum, exp) => sum += exp.amount, 0)

    const total = totalIncome - totalExpenses
    return(
      <>
      <Navbar user={me}/>
      <div className="container mt-5">
        <div className="row">
          <div className="col-6 offset-3">
            <div className="card">
              <div className={`card-header bg-${total > 0 ? "success" : "danger"}`}>
                <h4 className="text-light">Welcome to Budgety</h4>
              </div>
              <div className="card-body">
                <h1>Your total for {months[new Date().getMonth()]} is : {total}</h1>
                <h4>Total Incomes : {totalIncome}</h4>
                <h4>Total Expenses : {totalExpenses}</h4>
              </div>
              <div className="card-footer">
                <Form onSave={this.onSave} />
              </div>
            </div>
          </div>
        </div>
        <br/>
        <hr/>
        <div className="row">
          <div className="col-6">
            <Table
              className="bg-success"
              headers={[{
                label:"Description",
                key:"description"
              }, {
                label:"Amount",
                key:"amount"
              }]}
              data={incomes}
            />
          </div>
          <div className="col-6">
            <Table
              className="bg-danger"
              headers={[{
                label:"Description",
                key:"description"
              }, {
                label:"Amount",
                key:"amount"
              }]}
              data={expenses}
            />
          </div>
        </div>
      </div>
      </>
    )
  }
}

export default Home