import { Link } from "gatsby"
import React, { useState } from "react"
import a11yKeyDown from "../../utilities/a11y-keydown";

const Header = () => {
  const [shown, setShown] = useState(false);
  const toggle = () => setShown(!shown);

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

            <div onClick={() => { toggle() }}
                 onKeyDown={a11yKeyDown(toggle)}
                 role="button"
                 className={shown ? "navbar-burger burger is-active" : "navbar-burger burger"}
                 aria-label="menu"
                 aria-expanded="false"
                 tabIndex={0}
            >

              <span aria-hidden="true"/>
              <span aria-hidden="true"/>
              <span aria-hidden="true"/>
            </div>
          </div>

          <div className={shown ? "navbar-menu is-active" : "navbar-menu"}>
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

export default Header
