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
            <div className="container">
                <div className="row">
                    {
                        this.props.characters.map((personagem) => {
                            return (
                                <div className="col s3 my-col" key={personagem.id}>
                                    <CharacterCard image={personagem.image}
                                        att1={personagem.name}
                                        att2Span="ID"
                                        att2={personagem.id}
                                        att3Span="Status"
                                        att3={personagem.status}
                                        att4Span="Species"
                                        att4={personagem.species}
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

    // shouldComponentUpdate(nextProps,nextStates){
    //     return nextProps.actualPage === this.props.actualPage ? true : false;
    // }

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
                <li className="disabled"><Link to="#!"><i className="material-icons">chevron_left</i></Link></li>
                {pageElem}
                <li className="waves-effect"><Link to="#!"><i className="material-icons">chevron_right</i></Link></li>
            </ul>
        );
    }
}

export default class ContentBox extends Component {

    constructor() {
        super();
        this.state = { characters: [], actualPage: 1 };
    }

    componentWillMount() {
        console.log('VIIIIIIIIIIIIIIIIIESH ME CHAMOU MANO');
        
        this.consumeAPI()
    }

    consumeAPI() {
        console.log('ANTES TAVA ASSIM: ', this.state.characters);
        

        let limiteInicial = (1 + (10 * (this.props.params.page - 1)));
        let limiteFinal = 10 * this.props.params.page;
        for (let i = limiteInicial; i <= limiteFinal; i++) {
            $.ajax({
                url: `https://rickandmortyapi.com/api/character/${i}`,
                dataType: 'json',
                success: function (resposta) {
                    this.setState({
                        characters: [...this.state.characters, resposta],
                        actualPage: this.props.params.page
                    });
                    console.log('AGORA TA ASSIM: ', this.state.characters);
                }.bind(this),
            });
        }

       

    }

    componentWillReceiveProps(nextProps) {
        if (nextProps !== this.props) {
            this.setState({ characters: [] }, this.consumeAPI);
            // this.consumeAPI();
        }
    }

    render() {
        if (this.state.characters !== undefined) {
            return (
                <div className="content my-content">
                    <CardGrid characters={this.state.characters}
                        actualPage={this.state.actualPage}
                    />
                    <Pagination actualPage={this.state.actualPage} />
                </div>
            );
        } else {
            return (
                <div></div>
            );
        }

    }
}