import React from "react"
import Layout from "../components/layout"
import Languages from "../components/links-languages.js"
import { Button } from 'reactstrap';

export default () => {
	const pageName = 'envia';
  const label ='';
  const input = 'form-control';

	return (
  <div>
    <Layout currentLanguage='es'>
        <article>
            <h2>Participa</h2>
            <Languages pageName={pageName}/>
            <p>Convocatoria de participaciones para el proyecto Mal de Ojo. Se necesita una cantidad suficiente de fotografías para describir una lucha social y un texto breve que la acompañe. Todos los medios fotográficos son válidos y se primará la calidad artística. Fecha límite 16 de noviembre.</p>
            <p>Utiliza servicios como WeTransfer o Firefox Send para enviarnos tus archivos y los textos necesarios. Si lo necesitas envía un email a envia@proyectomaldeojo.com</p>
            <form
              css="max-width: 500px;"
              action="//formspree.io/envia@proyectomaldeojo.com"
              method="POST">
                <div className="form-group">
                  <label className={label} htmlFor="name">Nombre</label>
                  <input className={input} type="text" placeholder="Jane Doe" name="name"/>
                </div>
                <div className="form-group">
                  <label className={label} htmlFor="_replyto">Email</label>
                  <input className={input} type="email" placeholder="ejemplo@dominio.com" name="_replyto"/>
                </div>
                <div className="form-group">
                  <label className={label} htmlFor="message">Mensaje</label>
                  <textarea className={input} name="message" rows="3" placeholder="Tu mensaje"/>
                </div>
              <Button outline color="primary" css="margin-bottom: 32px;" type="submit">Envía</Button>
            </form>
        </article>
    </Layout>
  </div>
)}