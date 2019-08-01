import React from "react"
import { Link } from "gatsby"
import styles from "./header.module.css"

export default props => (
	<header>
		<h1>Mal de ojo</h1>
		<ul>
			<li><Link to="">Home</Link></li>
			<li><Link to="/manifiesto">Manifiesto</Link></li>
			<li><Link to="/envia">Envía</Link></li>
		</ul>
		<h2>{props.subHeader}</h2>
	</header>
	)