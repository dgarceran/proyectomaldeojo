import React from "react"
import Layout from "../components/layout"
import Languages from "../components/links-languages.js"

export default () => {
	const pageName = 'envia';

	return (
  <div>
    <Layout currentLanguage='en'>
        <article>
            <h2>Submit</h2>
            <Languages pageName={pageName}/>
            <p>Open-call for entries for the Mal de Ojo project. A sufficient number of photographs is needed to describe a local social struggle and a short text that accompanies it. All photographic media are valid and artistic quality will prevail. Deadline November 16. </p>
        </article>
    </Layout>
  </div>
)}