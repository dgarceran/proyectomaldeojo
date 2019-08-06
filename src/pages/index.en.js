import React from "react"
import Layout from "../components/layout"
import Languages from "../components/links-languages.js"

export default () => {
	const pageName = 'Proyecto Mal de Ojo';
	
	return (
	<div>
		<Layout currentLanguage='en' pageName={pageName} isHome='true' >
			<h2>Introduction</h2>
			<Languages pageName="" />
			<p>The huge amount of photographs that are processed in our brain on a daily basis have made us lose the ability to observe in favor of the simple act of seeing. Mal de Ojo is a collaborative project that will investigate and try to recover our peripheral vision of the current world, focusing on what has been silenced by any elite of power: the social struggle. The method of work will clusterize social struggles according to similar themes and their dissection with the intention of relating them to events of the same type in different parts of the world. Thus, we will create a relational map of current protests and in the recent past that will allow us to evaluate in more detail at what political moment and social development we are currently living, compare it with other moments of history, and observe the path we are walking with more clarity.</p>
			<p>We summon all individuals capable of providing images, whatever is their media -photographic-. The deadline is November 16, 2019. A sample of one or more struggles, protest and/or social claim is needed, with an associated text that explains its context clearly and briefly. Use the best image quality you can. The artistic quality of the photograph will be particularly valued. Of course, it is required that the authorship of the photograph be of the person who sends it.</p>
			<p>The selected images will be shared in our social networks, will be printed in an editorial publication in a magazine format with the conclusions of the study, and finally displayed in a exhibition where the work will be shown to the public.</p>
			<p>To send photographs go to proyectomaldeojo.com/envia and read the instructions, or send an email to envia@proyectomaldeojo.com. All projects will be reviewed.</p>
  		</Layout>
  	</div>
)}
