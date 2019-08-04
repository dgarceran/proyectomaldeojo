import React from "react"
import Layout from "../components/layout"
import Languages from "../components/links-languages.js"

export default () => {
	const pageName = 'envia';

	return (
  <div>
    <Layout currentLanguage='cat'>
        <article>
            <h2>Inscriu-te</h2>
            <Languages pageName={pageName}/>
            <p>Convocatòria de participacions pel projecte Mal de Ojo. Es necessita una quantitat suficient de fotografies per descriure una lluita social i un breu text que les acompanyi. Tots els mitjans fotogràfics són vàlids i prevaldrà la qualitat artística. Data límit 16 de novembre.</p>  
        </article>
    </Layout>
  </div>
)}