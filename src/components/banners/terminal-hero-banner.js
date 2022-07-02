import React from "react"
import {Link} from "gatsby";

class TerminalHeroBanner extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentTerminalText: '',
      commandIndex: 0,
      substringEnd: 0,
      wait: 10,
      mode: 'write'
    };

    this.commands = this.props.commands;
    this.updateText = this.updateText.bind(this);
  }

  componentDidMount() {
    let intervalId = setInterval(this.updateText, 30);

    this.setState({intervalId: intervalId});
  }

  componentWillUnmount() {
    clearInterval(this.state.intervalId);
  }

  updateText() {
    if (this.state.wait !== 0) {
      this.setState({wait: this.state.wait - 1});
      return;
    }

    if (this.state.mode === 'write') {
      if (this.state.currentTerminalText === this.commands[this.state.commandIndex]) {
        this.setState({
          wait: 10,
          mode: 'erase'
        });

        return;
      }

      this.setState({
        currentTerminalText: this.commands[this.state.commandIndex].substring(0, this.state.substringEnd),
        substringEnd: this.state.substringEnd + 1
      });
    } else {
      if (this.state.substringEnd === 0) {
        this.setState({
          currentTerminalText: '',
          wait: 5,
          mode: 'write',
          commandIndex: (this.state.commandIndex + 1) % (this.commands.length - 1)
        });

        return;
      }

      this.setState({
        currentTerminalText: this.commands[this.state.commandIndex].substring(0, this.state.substringEnd),
        substringEnd: this.state.substringEnd - 1
      });
    }
  }

  render() {
    return (
      <div className={"banner banner--terminal-hero"}>
        <div className={"container"}>
          <div className={"columns"}>
            <div className={"column"}>
              <div className={"terminal"}>
                <div className={"terminal-line"}>
                  <span style={{ color: 'rgb(219, 94, 94)' }}>marie</span> at <span style={{ color: 'rgb(219, 94, 94)' }}>alter-ego</span> in <span style={{ color: 'rgb(187, 255, 113)' }}>~/Programming</span>
                </div>
                <div className={"terminal-line"}>↪&#xfe0e; {this.state.currentTerminalText}_</div>
              </div>
            </div>
            <div className={"column column--ctas"}>
              <Link to={'/projects'} className="button button--cta"><span className="mdi mdi-source-branch"/> Projects</Link>
              <a href={'https://github.com/mariekirya'} className="button button--cta"><span className="mdi mdi-github"/> GitHub</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}


export default TerminalHeroBanner