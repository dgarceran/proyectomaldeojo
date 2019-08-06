import React from "react"
import Header from "./header.js"
import "./bootstrap.min.css"
import { Helmet } from "react-helmet"

export default (props) => {
  var properTitle = props.pageName.charAt(0).toUpperCase() + props.pageName.slice(1);
  if(!props.isHome) properTitle = 'Mal de ojo - ' + properTitle;
  return (
    <div className='maldeojo'>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{properTitle}</title>
      </Helmet>
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <Header currentLanguage={props.currentLanguage}/>
          </div>
          <div className="col-md-9">
            {props.children}
          </div>
        </div>
      </div>
    </div>)
}