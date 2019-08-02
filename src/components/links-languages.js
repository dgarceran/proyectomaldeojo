import React from "react"
import { Link } from "gatsby"
import styles from "./header.module.css"

export default props => (
	<ul>
		<li><Link to="/manifiesto">Castellano</Link></li>
		<li><Link to="/manifiesto/cat">Català</Link></li>
		<li><Link to="/manifiesto/en">English</Link></li>
	</ul>
)