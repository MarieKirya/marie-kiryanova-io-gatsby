import React from "react"
import {Link} from "gatsby";

class ContactFormBanner extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className={"contact-form"}>
        <div className={"container"}>

          <div className={"columns"}>
            <div className={"column is-half  is-offset-one-quarter "}>

              <h2>Contact Me</h2>

              <div className={"columns"}>
                <div className={"column"}>
                  <div className="field">
                    <div className="control">
                      <input className="input" type="text" placeholder="Name"/>
                    </div>
                  </div>
                </div>
                <div className={"column"}>
                  <div className="field">
                    <div className="control">
                      <input className="input" type="email" placeholder="Email"/>
                    </div>
                  </div>
                </div>
              </div>

              <div className="field">
                <div className="control">
                  <input className="input" type="text" placeholder="Subject"/>
                </div>
              </div>

              <div className="field">
                <div className="control">
                  <textarea className="textarea" placeholder="Message"/>
                </div>
              </div>

              <div className="field">
                <div className="control">
                  <button className="button is-link">Submit</button>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ContactFormBanner