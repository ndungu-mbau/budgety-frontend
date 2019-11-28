import React, { useState } from "react"

import DataProvider from "../utils/data"

const styles = {
  backgroundImage: "url(&quot;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAASCAYAAABSO15qAAAAAXNSR0IArs4c6QAAAPhJREFUOBHlU70KgzAQPlMhEvoQTg6OPoOjT+JWOnRqkUKHgqWP4OQbOPokTk6OTkVULNSLVc62oJmbIdzd95NcuGjX2/3YVI/Ts+t0WLE2ut5xsQ0O+90F6UxFjAI8qNcEGONia08e6MNONYwCS7EQAizLmtGUDEzTBNd1fxsYhjEBnHPQNG3KKTYV34F8ec/zwHEciOMYyrIE3/ehKAqIoggo9inGXKmFXwbyBkmSQJqmUNe15IRhCG3byphitm1/eUzDM4qR0TTNjEixGdAnSi3keS5vSk2UDKqqgizLqB4YzvassiKhGtZ/jDMtLOnHz7TE+yf8BaDZXA509yeBAAAAAElFTkSuQmCC&quot;)",
  backgroundRepeat: "no-repeat",
  backgroundAttachment: "scroll",
  backgroundSize: "16px 18px",
  backgroundPosition: "98% 50%"
}

export default (props) => {
  const [ email, setEmail ] = useState('')
  const [ password, setPassword ] = useState('')
  return (
    <DataProvider>
      {({ login }) => {
        return (
          <div class="section section-image section-login" style={{backgroundImage: "url('./assets/img/login-image.jpg')"}}>
            <div class="container">
              <div class="row">
                <div class="col-lg-4 col-md-6 mx-auto">
                  <div class="card card-register">
                    <h3 class="title mx-auto">Welcome</h3>
                    <div class="social-line text-center">
                      <a href="#pablo" class="btn btn-neutral btn-facebook btn-just-icon mt-0">
                        <i class="fa fa-facebook-square"></i>
                      </a>
                      <a href="#pablo" class="btn btn-neutral btn-google btn-just-icon mt-0">
                        <i class="fa fa-google-plus"></i>
                      </a>
                      <a href="#pablo" class="btn btn-neutral btn-twitter btn-just-icon mt-0">
                        <i class="fa fa-twitter"></i>
                      </a>
                    </div>
                    <div class="register-form">
                      <label>Email</label>
                      <div class="input-group form-group-no-border">
                        <div class="input-group-prepend">
                          <span class="input-group-text">
                            <i class="nc-icon nc-email-85"></i>
                          </span>
                        </div>
                        <input type="email" class="form-control" placeholder="Email" style={styles} value={email} onChange={e => setEmail(e.target.value)}></input>
                      </div>
                      <label>Password</label>
                      <div class="input-group form-group-no-border">
                        <div class="input-group-prepend">
                          <span class="input-group-text">
                            <i class="nc-icon nc-key-25"></i>
                          </span>
                        </div>
                        <input type="password" class="form-control" placeholder="Password" style={styles} value={password} onChange={e => setPassword(e.target.value)}></input>
                      </div>
                      <button class="btn btn-danger btn-block btn-round" onClick={() => login({ email, password })}>Log In</button>
                    </div>
                    <div class="forgot">
                      <a href="/register" class="btn btn-link btn-danger">Register</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      }}
    </DataProvider>
  )
}