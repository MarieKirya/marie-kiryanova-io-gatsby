import { Link } from "gatsby"
import React from "react"

class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      shown: false,
    };
  }

  toggle() {
    this.setState({
      shown: !this.state.shown
    });
  }

  render() {
    return (
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

              <div onClick={this.toggle.bind(this)}
                   role="button"
                   className={this.state.shown ? "navbar-burger burger is-active" : "navbar-burger burger"}
                   aria-label="menu"
                   aria-expanded="false">

                <span aria-hidden="true"/>
                <span aria-hidden="true"/>
                <span aria-hidden="true"/>
              </div>
            </div>

            <div className={this.state.shown ? "navbar-menu is-active" : "navbar-menu"}>
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
    );
  }
}

export default Header
