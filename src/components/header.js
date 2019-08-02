import React from "react"
import { Link } from "gatsby"
import styles from "./header.module.css"
import Menu from "./header-menu.js"

export default props => (
	<header class="row">
		<div class="col-12">
			<h1>Mal de ojo</h1>
			<Menu />
			<h2>{props.subHeader}</h2>
		</div>
	</header>
	)