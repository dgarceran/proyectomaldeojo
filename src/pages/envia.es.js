import React from "react"
import Layout from "../components/layout"
import Languages from "../components/links-languages.js"

export default () => {
	const pageName = 'envia';

	return (
  <div>
    <Layout currentLanguage='es'>
        <article>
            <h2>Participa</h2>
            <Languages pageName={pageName}/>
            <p>Convocatoria de participaciones para el proyecto Mal de Ojo. Se necesita una cantidad suficiente de fotografías para describir una lucha social y un texto breve que la acompañe. Todos los medios fotográficos son válidos y se primará la calidad artística. Fecha límite 16 de noviembre.</p>
        </article>
    </Layout>
  </div>
)}