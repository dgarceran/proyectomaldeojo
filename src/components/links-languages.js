import React from "react"
import { Link } from "gatsby"
import styles from "./header.module.css"

export default props => {	
	return (
	<ul>
		<li><Link to= {"es/" + props.pageName}>Castellano</Link></li>
		<li><Link to= {"cat/" + props.pageName}>Català</Link></li>
		<li><Link to= {"en/" + props.pageName}>English</Link></li>
	</ul>
)}