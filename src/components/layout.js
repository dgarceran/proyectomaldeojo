import React from "react"
import Header from "./header.js"
import "./bootstrap.min.css"

export default ({children}) => (
  <div class="container">
    <div class="row">
      <div class="col-md-3">
        <Header/>
      </div>
      <div class="col-md-9">
        {children}
      </div>
    </div>
  </div>)