import React, { Component } from 'react';
import './css/pure-min.css';
import './css/side-menu.css';
import './css/custom.css';
import { Link } from 'react-router';

class App extends Component {

  render() {
    return (
      <div id="layout">
        <Link to="#menu" id="menuLink" className="menu-link">
          <span></span>
        </Link>

        <div id="menu">
          <div className="pure-menu">
            <Link className="pure-menu-heading" to="/characters">COMPANY</Link>

            <ul className="pure-menu-list">
              <li className="pure-menu-item menu-item-divided pure-menu-selected">
                <Link to="/characters" className="pure-menu-link">Characters</Link>
              </li>
              <li className="pure-menu-item"><Link to="/locations" className="pure-menu-link">Locations</Link></li>

              <li className="pure-menu-item">
                <Link to="/episodes" className="pure-menu-link">Episodes</Link>
              </li>

              <li className="pure-menu-item"><Link to="/about" className="pure-menu-link">About me</Link></li>
            </ul>
          </div>
        </div>

        <div id="main">
          <div className="header">
            <h1>RICK AND MORTY CARD WIKI</h1>
            <h2>a simple page for a awesome show</h2>
          </div>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default App;
