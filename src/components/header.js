import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
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

          <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarPortfolio">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
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

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
