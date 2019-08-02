import React from "react"
import { Link } from "gatsby"
import styles from "./header.module.css"

export default props => (
	<ul>
		<li><Link to="">Home</Link></li>
		<li><Link to="/manifiesto">Manifiesto</Link></li>
		<li><Link to="/envia">Envía</Link></li>
	</ul>
)