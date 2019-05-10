import React from "react"
import {Link} from "gatsby";

const TerminalHeroBanner = () => (
  <div className={"banner banner--terminal-hero"}>
    <div className={"container"}>
      <div className={"columns"}>
        <div className={"column"}>
          <div className={"terminal"}>
            <div className={"terminal-line"}>
              <span style={{ color: 'rgb(219, 94, 94)' }}>marie</span> at <span style={{ color: 'rgb(219, 94, 94)' }}>alter-ego</span> in <span style={{ color: 'rgb(187, 255, 113)' }}>~/Programming</span>
            </div>
            <div className={"terminal-line"}>↪</div>
          </div>
        </div>
        <div className={"column column--ctas"}>
          <Link to={'/projects'} className="button button--cta"><span className="mdi mdi-source-branch"/> Projects</Link>
          <a href={'https://github.com/mariekirya'} className="button button--cta"><span className="mdi mdi-github-circle"/> GitHub</a>
        </div>
      </div>
    </div>
  </div>
);

export default TerminalHeroBanner