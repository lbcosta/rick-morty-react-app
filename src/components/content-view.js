import React, { Component } from 'react';
import '../css/custom.css';
import $ from 'jquery';
import CharacterCard from './card.js';
import '../../node_modules/materialize-css/dist/css/materialize.css';
import '../../node_modules/materialize-css/dist/js/materialize';
import { Link } from 'react-router'

class CardGrid extends Component {

    render() {
        return (
            <div>
                <div className="row">
                    {
                        this.props.characters.map((personagem) => {
                            return (
                                <div className="col s12 m4 l3 my-col" key={personagem.id}>
                                    <CharacterCard image={personagem.image}
                                        att1={personagem.name}
                                        att2Span="ID"
                                        att2={personagem.id}
                                        att3Span="Status"
                                        att3={personagem.status}
                                        att4Span="Species"
                                        att4={personagem.species}
                                        att5={personagem.episode}
                                    />
                                </div>
                            );
                        })
                    }
                </div>
            </div>
        );
    }
}


class Pagination extends Component {

    constructor() {
        super();
        this.state = { numPag: 1 }
    }

    componentWillMount() {
        $.ajax({
            url: `https://rickandmortyapi.com/api/character/`,
            dataType: 'json',
            success: function (resposta) {
                this.setState({ numPag: Math.floor((resposta.info.count) / 10) });
            }.bind(this),
        });
    }

    render() {

        let pageElem = [];
        for (let i = 1; i <= this.state.numPag; i++) {
            if (i === this.props.actualPage) {
                pageElem.push(
                    <li className="active" key={i}>
                        <Link to={`/characters/${i}`}>{i}</Link>
                    </li>
                )
            } else {
                pageElem.push(
                    <li className="waves-effect" key={i}>
                        <Link to={`/characters/${i}`}>{i}</Link>
                    </li>
                )

            }
        }

        return (
            <ul className="pagination">
                <li className={this.props.actualPage === 1 ? "disabled" : "waves-effect"}><Link to={`/characters/${Number(this.props.actualPage) - 1}`}><i className="material-icons">chevron_left</i></Link></li>
                {pageElem}
                <li className={this.props.actualPage === this.state.numPag ? "disabled" : "waves-effect"}><Link to={`/characters/${Number(this.props.actualPage) + 1}`}><i className="material-icons">chevron_right</i></Link></li>
            </ul>
        );
    }
}

class Filter extends Component {

    constructor() {
        super()
        this.state = { character: '' }
        this.setCharacter = this.setCharacter.bind(this);
        this.searchClick = this.searchClick.bind(this);
        this.searchEnter = this.searchEnter.bind(this);
    }

    searchClick(event) {
        this.props.callBackSearch(this.state.character)
    }

    searchEnter(event) {
        if (event.keyCode === 13) {
            event.preventDefault();
            this.props.callBackSearch(this.state.character)
        }
    }

    setCharacter(event) {
        this.setState({ character: event.target.value })
    }

    render() {
        return (

            <form>
                <div className="row">
                    <div className="input-field col s7 offset-s2">
                        <input id="searchBar" type="text" className="validate" value={this.state.character} onChange={this.setCharacter} onKeyDown={this.searchEnter}></input>
                        <label htmlFor="icon_prefix2">Pesquisar personagem</label>
                    </div>
                    <div className="col s1">
                        <a className="waves-effect waves-light btn" id="search-btn" onClick={this.searchClick}><i className="material-icons">search</i></a>

                    </div>
                </div>
            </form>

        );
    }
}

export default class ContentBox extends Component {

    constructor() {
        super();
        this.state = { characters: [], actualPage: 1 };
        this.searchAPI = this.searchAPI.bind(this);
    }

    componentWillMount() {
        this.consumeAPI()
    }

    consumeAPI() {
        let limiteInicial = (1 + (10 * (this.props.params.page - 1)));
        let limiteFinal = 10 * this.props.params.page;
        let arrayAux = [];
        for (let i = limiteInicial; i <= limiteFinal; i++) {
            $.ajax({
                url: `https://rickandmortyapi.com/api/character/${i}`,
                dataType: 'json',
                async: false,
                success: function (resposta) {
                    arrayAux.push(resposta);
                },
            });
        }
        this.setState({
            characters: arrayAux,
            actualPage: this.props.params.page
        });
    }

    searchAPI(character) {
        $.ajax({
            url: `https://rickandmortyapi.com/api/character/?name=${character}`,
            dataType: 'json',
            async: false,
            success: function (resposta) {
                this.setState({ characters: resposta.results });
            }.bind(this),
        });
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps !== this.props) {
            this.setState({ characters: [] }, this.consumeAPI);
        }
    }

    render() {
        if (this.state.characters !== undefined) {
            return (
                <div>
                    <Filter callBackSearch={this.searchAPI} />
                    <div className="content my-content">
                        <CardGrid characters={this.state.characters}
                            actualPage={this.state.actualPage}
                        />
                        <Pagination actualPage={this.state.actualPage} />
                    </div>
                </div>
            );
        } else {
            return (
                <div></div>
            );
        }

    }
}