import React, { Component } from 'react';
import './css/pure-min.css';
import './css/side-menu.css';
import './css/custom.css';
import { Link } from 'react-router/lib';

class App extends Component {

  constructor() {
    super()
    this.invisible = this.invisible.bind(this);
  }

  invisible(event) {
    event.target.style.visibility = "hidden";

  }

  render() {
    let btn, img;
    if (this.props.location.pathname === "/") {
      btn = (
        <Link className="waves-effect waves-light btn-large"
          to="/characters/1"
          onClick={this.invisible}>SHOW ME WHAT YOU GOT</Link>

      )
      
      img = (<img src="../showme.jpeg" id="show-me" alt=""/>)
    }

    return (
      <div >
        <div id="main">
          <div className="header my-header">
            <h1>RICK AND MORTY CARD WIKI</h1>
            <h2>a simple page for an awesome show</h2>
            <nav className="my-nav-wrapper">
            {btn}
              <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li><a href="https://github.com/lbcosta/rick-morty-api-react-app" target="_blank" rel="noopener noreferrer">Github</a></li>
              </ul>
            </nav>
            
          </div>
          {img}
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default App;
