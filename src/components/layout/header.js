import { Link } from "gatsby"
import React from "react"

const Header = () => (
  <header>
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="container">
        <div className="navbar-brand">
          <Link
            className="navbar-item"
            to="/"
          >
            > mk_
          </Link>

          <div role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarPortfolio">
            <span aria-hidden="true"/>
            <span aria-hidden="true"/>
            <span aria-hidden="true"/>
          </div>
        </div>

        <div className="navbar-menu">
          <Link
            className="navbar-item"
            to="/jobs"
          >
            Jobs
          </Link>
          <Link
            className="navbar-item"
            to="/projects"
          >
            Projects
          </Link>
          <Link
            className="navbar-item"
            to="/blog"
          >
            Blog
          </Link>
        </div>
      </div>
    </nav>
  </header>
)

export default Header
