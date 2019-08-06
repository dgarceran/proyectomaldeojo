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
    <Layout currentLanguage='cat'>
        <article>
            <h2>Inscriu-te</h2>
            <Languages pageName={pageName}/>
            <p>Convocatòria de participacions pel projecte Mal de Ojo. Es necessita una quantitat suficient de fotografies per descriure una lluita social i un breu text que les acompanyi. Tots els mitjans fotogràfics són vàlids i prevaldrà la qualitat artística. Data límit 16 de novembre.</p>  
            <p>Utilitza serveis com WeTransfer o Firefox Send per enviar-nos els teus arxius.</p>
            <form
              css="max-width: 500px;"
              action="//formspree.io/envia@proyectomaldeojo.com"
              method="POST">
                <div className="form-group">
                  <label className={label} htmlFor="name">Nom</label>
                  <input className={input} type="text" placeholder="Jane Doe" name="name"/>
                </div>
                <div className="form-group">
                  <label className={label} htmlFor="_replyto">Email</label>
                  <input className={input} type="email" placeholder="example@domini.com" name="_replyto"/>
                </div>
                <div className="form-group">
                  <label className={label} htmlFor="message">Missatge</label>
                  <textarea className={input} name="message" rows="3" placeholder="El teu missatge"/>
                </div>
              <Button outline color="primary" css="margin-bottom: 32px;" type="submit">Envia</Button>
            </form>
        </article>
    </Layout>
  </div>
)}