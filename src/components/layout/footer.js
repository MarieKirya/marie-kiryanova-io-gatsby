import React from "react"

const Footer = () => (
  <footer className={"page-footer"}>
    <div className={"container"}>
      <div className={"social-links"}>
        <a href={"https://www.linkedin.com/in/mariekirya"}><span className="mdi mdi-24px mdi-linkedin"/></a>
        <a href={"https://github.com/mariekirya"}><span className="mdi mdi-24px mdi-github-face"/></a>
      </div>
      <div className={"copyright"}>
        © {new Date().getFullYear()} Marie Kiryanova
      </div>
    </div>
  </footer>
)

export default Footer
