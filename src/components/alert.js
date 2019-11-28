import React from "react"

export default ({ err }) => (
  err.ok === false ?
  <div class="alert alert-danger alert-with-icon p-5" data-notify="container">
    <div class="container">
      <div class="alert-wrapper">
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
          <i class="nc-icon nc-simple-remove"></i>
        </button>
        <div class="message"><i class="nc-icon nc-bell-55"></i> {err.message}</div>
      </div>
    </div>
  </div> : null
)