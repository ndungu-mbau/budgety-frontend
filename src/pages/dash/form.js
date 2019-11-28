import React, { Component } from "react"

class Form extends Component{
  state = {
    description:'',
    amount : 0,
    type : 'income'
  }

  render(){
    return (
      <div>
        <h3>Make new entry</h3>
        <hr/>
        <div class="form-group">
          <label>Title</label>
          <input type="text" class="form-control" placeholder="Enter title" onChange={e => this.setState({description : e.target.value})} value={this.state.description}/>
        </div>
        <div class="form-group">
          <label>Amount</label>
          <input type="number" class="form-control"  placeholder="Enter amount" value={this.state.amount} onChange={e => this.setState({amount : e.target.value })}/>
        </div>
        <div class="form-group">
          <label>Type</label>
          <select class="form-control" onChange={e => this.setState({ type: e.target.value })}>
            <option value="income">Income</option>
            <option value="expense">Expense</option>
          </select>
        </div>
        <button class={`btn btn-${this.state.type === "income" ? "success" : "danger"}`} onClick={() => this.props.onSave(this.state)}>Save</button>
      </div>
    )
  }
}

export default Form