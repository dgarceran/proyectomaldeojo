import React from "react"
import { Link } from "gatsby"

export default props => {
	return (
	<ul>
		<li><Link to={props.currentLanguage}>Home</Link></li>
		<li><Link to={props.currentLanguage + "/manifiesto" }>Manifiesto</Link></li>
		<li><Link to={props.currentLanguage + "/envia" }>Envía</Link></li>
	</ul>
)}