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
    <Layout currentLanguage='en'>
        <article>
            <h2>Submit</h2>
            <Languages pageName={pageName}/>
            <p>Open-call for entries for the Mal de Ojo project. A sufficient number of photographs is needed to describe a local social struggle and a short text that accompanies it. All photographic media are valid and artistic quality will prevail. Deadline November 16. </p>
            <p>Use services as WeTransfer or Firefox Send to send us your files. If you need it, send an email to envia@proyectomaldeojo.com.</p>
            <form
              css="max-width: 500px;"
              action="//formspree.io/envia@proyectomaldeojo.com"
              method="POST">
                <div className="form-group">
                  <label className={label} htmlFor="name">Name</label>
                  <input className={input} type="text" placeholder="Jane Doe" name="name"/>
                </div>
                <div className="form-group">
                  <label className={label} htmlFor="_replyto">Email</label>
                  <input className={input} type="email" placeholder="example@domain.com" name="_replyto"/>
                </div>
                <div className="form-group">
                  <label className={label} htmlFor="message">Message</label>
                  <textarea className={input} name="message" rows="3" placeholder="Your Message"/>
                </div>
              <Button outline color="primary" css="margin-bottom: 32px;" type="submit">Send</Button>
            </form>
        </article>
    </Layout>
  </div>
)}