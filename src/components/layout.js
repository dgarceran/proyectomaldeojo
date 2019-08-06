import React from "react"
import Header from "./header.js"
import "./bootstrap.min.css"

export default (props) => {
  return (
  <div className="container">
    <div className="row">
      <div className="col-md-3">
        <Header currentLanguage={props.currentLanguage}/>
      </div>
      <div className="col-md-9">
        {props.children}
      </div>
    </div>
  </div>)
}