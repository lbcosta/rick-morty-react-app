import React, { Component } from 'react';
import './css/pure-min.css';
import './css/side-menu.css';
import './css/custom.css';
import '../node_modules/@material/image-list/dist/mdc.image-list.css';
import '../node_modules/@material/card/dist/mdc.card.css';
import '../node_modules/@material/grid-list/dist/mdc.grid-list.css';
import $ from 'jquery';
import CharacterCard from './character-card.js';

class App extends Component {

  constructor() {
    super();
    this.state = {personagens : []}
  }

  componentWillMount() {
    $.ajax({
      url:"https://rickandmortyapi.com/api/character/",
      dataType: 'json',
      success:function(resposta){
        this.setState({personagens : resposta.results});
      }.bind(this)
    });
  }

  render() {
    console.log(this.state);
    
    return (
      <div id="layout">
        <a href="#menu" id="menuLink" className="menu-link">
          <span></span>
        </a>

        <div id="menu">
          <div className="pure-menu">
            <a className="pure-menu-heading" href="#">Menu</a>

            <ul className="pure-menu-list">
              <li className="pure-menu-item menu-item-divided pure-menu-selected">
                <a href="#" className="pure-menu-link">Characters</a>
              </li>
              <li className="pure-menu-item"><a href="#" className="pure-menu-link">Locations</a></li>

              <li className="pure-menu-item">
                <a href="#" className="pure-menu-link">Episodes</a>
              </li>

              <li className="pure-menu-item"><a href="#" className="pure-menu-link">About me</a></li>
            </ul>
          </div>
        </div>

        <div id="main">
          <div className="header">
            <h1>RICK AND MORTY CARD WIKI</h1>
            <h2>a simple page for a awesome show</h2>
          </div>

          <div className="content my-content">
            <div className="mdc-grid-list">
              <ul className="mdc-grid-list__tiles">
                {
                  this.state.personagens.map((personagem) => {
                    return (
                      <li class="mdc-grid-tile">
                        <CharacterCard image={personagem.image} 
                                       name={personagem.name} 
                                       id={personagem.id}
                                       status={personagem.status}
                                       species={personagem.species}              
                        />
                      </li>
                    );
                  })
                }
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
