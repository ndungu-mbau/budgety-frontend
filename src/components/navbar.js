import React from "react"

export default props => (
  <nav className="navbar navbar-expand-lg bg-primary">
    <div className="container">
      <a className="navbar-brand" href="/">Hello, {props.user.username}</a>
      <button className="navbar-toggler navbar-toggler-right burger-menu" type="button" data-toggle="collapse" data-target="#navbar-primary" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-bar"></span>
        <span className="navbar-toggler-bar"></span>
        <span className="navbar-toggler-bar"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbar-primary">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <a className="nav-link" href="/logout"><i className="nc-icon nc-settings-gear-65" aria-hidden="true"></i>&nbsp;Log Out</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
)