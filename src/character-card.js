import React, { Component } from 'react';
import './css/custom.css';
import '../node_modules/@material/image-list/dist/mdc.image-list.css';
import '../node_modules/@material/card/dist/mdc.card.css';

class CharacterCard extends Component {



    render() {
        const personagem = {
            image : this.props.image,
            name : this.props.name,
            id : this.props.id,
            status : this.props.status,
            species : this.props.species
        }



        return (
            <div className="mdc-card">
                <div className="mdc-card__media">
                    <ul className="mdc-image-list--with-text-protection my-image-list">
                        <li className="mdc-image-list__item">
                            <div className="mdc-image-list__image-aspect-container">
                                <img className="mdc-image-list__image" src={personagem.image}></img>
                            </div>
                            <div className="mdc-image-list__supporting">
                                <span className="mdc-image-list__label">{personagem.name}</span>
                            </div>
                        </li>
                    </ul>
                </div>
            <div className="info-wrap">
                <div>
                    <span>ID</span>
                    <span className="right-span">{personagem.id}</span>
                </div>

                <div>
                    <span>Status</span>
                    <span className="right-span">{personagem.status}</span>
                </div>

                <div>
                    <span>Species</span>
                    <span className="right-span">{personagem.species}</span>
                </div>
            </div>
            </div>
        );
    }

}

export default CharacterCard;