import React from "react"

const Footer = () => (
  <footer className={"page-footer"}>
    <div className={"container"}>
      <div className={"social-links"}>
        <a href={"https://www.linkedin.com/in/mariekirya"} aria-label="Marie's LinkedIn">
          <span className="mdi mdi-24px mdi-linkedin"/>
          </a>
        <a href={"https://github.com/mariekirya"} aria-label="Marie's GitHub">
          <span className="mdi mdi-24px mdi-github"/>
          </a>
      </div>
      <div className={"copyright"}>
        © {new Date().getFullYear()} Marie Kiryanova
      </div>
    </div>
  </footer>
)

export default Footer
