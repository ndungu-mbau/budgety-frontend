import React, { Component } from "react"
import Navbar from "../../components/navbar"

import Table from "./table"
import Form from "./form"

import { get, post } from "../../utils/requests"

class Home extends Component{
  state = {
    incomes:[],
    expenses:[],
    total:0
  }

  async componentDidMount(){
    const { data: entries } = await get('/entries')

    const incomes = entries.filter(entry => entry.type === "income")
    const expenses = entries.filter(entry => entry.type === "expense")

    this.setState({ incomes, expenses })
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
    const { incomes, expenses } = this.state

    const totalIncome = incomes.reduce((sum, inc) => sum += inc.amount, 0)
    const totalExpenses = expenses.reduce((sum, exp) => sum += exp.amount, 0)

    const total = totalIncome - totalExpenses
    return(
      <>
      <Navbar/>
      <div className="container">
        <div className="row">
          <h1 className="text-center">BUDGETY</h1>
          <br/>
          <hr/>
          <br/>
          <h2>Total: {total}</h2>
        </div>
        <div className="row">
          <div className="col-6 offset-3">
            <Form onSave={this.onSave} />
          </div>
        </div>
        <br/>
        <hr/>
        <div className="row">
          <div className="col-6">
            <Table
              type="incomes"
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
              type="expenses"
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