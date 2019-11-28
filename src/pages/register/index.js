import React, { Component } from "react"
import { Link } from "react-router-dom"
import Alert from "../../components/alert"

import { post } from "../../utils/requests"

const styles = {
  backgroundImage: "url(&quot;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAASCAYAAABSO15qAAAAAXNSR0IArs4c6QAAAPhJREFUOBHlU70KgzAQPlMhEvoQTg6OPoOjT+JWOnRqkUKHgqWP4OQbOPokTk6OTkVULNSLVc62oJmbIdzd95NcuGjX2/3YVI/Ts+t0WLE2ut5xsQ0O+90F6UxFjAI8qNcEGONia08e6MNONYwCS7EQAizLmtGUDEzTBNd1fxsYhjEBnHPQNG3KKTYV34F8ec/zwHEciOMYyrIE3/ehKAqIoggo9inGXKmFXwbyBkmSQJqmUNe15IRhCG3byphitm1/eUzDM4qR0TTNjEixGdAnSi3keS5vSk2UDKqqgizLqB4YzvassiKhGtZ/jDMtLOnHz7TE+yf8BaDZXA509yeBAAAAAElFTkSuQmCC&quot;)",
  backgroundRepeat: "no-repeat",
  backgroundAttachment: "scroll",
  backgroundSize: "16px 18px",
  backgroundPosition: "98% 50%"
}

class Login extends Component{
  state = {
    username: "",
    email: "",
    password: "",
    err:{}
  }

  onSubmit = async user => {
    const res = await post('/auth/signup', user)
    console.log(res)
    if(!res.data.ok){
      this.setState({ err : res.data })
    } else {
      window.localStorage.setItem('token', res.data.token)
      this.props.history.push('/')
    }
  }

  render(){
    return (
      <div class="section section-image section-login">
        <Alert err={this.state.err} />
        <div class="container">
          <div class="row">
            <div class="col-lg-4 col-md-6 mx-auto">
              <div class="card card-register">
                <h3 class="title mx-auto">Welcome</h3>
                <div class="register-form">
                <label>Name</label>
                  <div class="input-group form-group-no-border">
                    <div class="input-group-prepend">
                      <span class="input-group-text">
                        <i class="nc-icon nc-email-85"></i>
                      </span>
                    </div>
                    <input type="text" class="form-control" placeholder="Name" style={styles} value={this.state.username} onChange={e => this.setState({ username: e.target.value })}></input>
                  </div>
                  <label>Email</label>
                  <div class="input-group form-group-no-border">
                    <div class="input-group-prepend">
                      <span class="input-group-text">
                        <i class="nc-icon nc-email-85"></i>
                      </span>
                    </div>
                    <input type="email" class="form-control" placeholder="Email" style={styles} value={this.state.email} onChange={e => this.setState({ email: e.target.value })}></input>
                  </div>
                  <label>Password</label>
                  <div class="input-group form-group-no-border">
                    <div class="input-group-prepend">
                      <span class="input-group-text">
                        <i class="nc-icon nc-key-25"></i>
                      </span>
                    </div>
                    <input type="password" class="form-control" placeholder="Password" style={styles} value={this.state.password} onChange={e => this.setState({ password : e.target.value })}></input>
                  </div>
                  <button class="btn btn-danger btn-block btn-round" onClick={() => this.onSubmit(this.state)}>Register</button>
                </div>
                <div class="forgot">
                  <Link to="/login" class="btn btn-link btn-danger">Log In</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Login