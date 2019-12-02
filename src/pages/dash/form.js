import React, { Component } from "react"

class Form extends Component{
  state = {
    description:'',
    amount : 0,
    type : ''
  }

  onSave = () => {
    if(this.state.type !== ""){
      this.props.onSave(this.state)
      this.setState({
        description:'',
        amount:0,
        type:''
      })
    }
  }

  render(){
    return (
      <>
        <h3>Make new entry</h3>
        <hr/>
        <div className="row">
          <div className="col">
            <div class="form-group">
              <input type="text" class="form-control" placeholder="Enter title" onChange={e => this.setState({description : e.target.value})} value={this.state.description}/>
            </div>
          </div>
          <div className="col">
            <div class="form-group">
              <input type="number" class="form-control"  placeholder="Enter amount" value={this.state.amount} onChange={e => this.setState({amount : e.target.value })}/>
            </div>
          </div>
          <div className="col">
            <div class="form-group">
              <select class="form-control" onChange={e => this.setState({ type: e.target.value })}>
                <option value="">Select Type</option>
                <option value="income">Income</option>
                <option value="expense">Expense</option>
              </select>
            </div>
          </div>
          <div className="col">
            <button class={`btn btn-${this.state.type === "income" ? "success" : this.state.type === "expense" ? "danger" : "default"}`} onClick={this.onSave}>Save</button>
          </div>
        </div>
      </>
    )
  }
}

export default Form