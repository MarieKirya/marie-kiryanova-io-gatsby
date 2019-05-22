import React from "react"

const ContactFormBanner = () => (
  <div className={"banner banner--contact-form"}>
    <div className={"container"}>
      <div className={"columns"}>
        <div className={"column is-half  is-offset-one-quarter "}>

          <h2>Contact Me</h2>
          <form name="contact" method="POST" data-netlify="true">
            <div className={"columns"}>
              <div className={"column"}>
                <div className="field">
                  <div className="control">
                    <input className="input" type="text" name="name" placeholder="Name"/>
                  </div>
                </div>
              </div>
              <div className={"column"}>
                <div className="field">
                  <div className="control">
                    <input className="input" type="email" name="email" placeholder="Email"/>
                  </div>
                </div>
              </div>
            </div>

            <div className="field">
              <div className="control">
                <input className="input" type="text" name="subject" placeholder="Subject"/>
              </div>
            </div>

            <div className="field">
              <div className="control">
                <textarea className="textarea" name="message" placeholder="Message"/>
              </div>
            </div>

            <div className="field">
              <div className="control">
                <button className="button button--cta inversed is-link" type="submit">Submit</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
);

export default ContactFormBanner