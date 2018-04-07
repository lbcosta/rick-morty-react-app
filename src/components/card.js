import React, { Component } from 'react';
import '../css/custom.css';
import '../../node_modules/@material/image-list/dist/mdc.image-list.css';
import '../../node_modules/@material/card/dist/mdc.card.css';

class Card extends Component {



    render() {
        return (
            <div className="mdc-card">
                <div className="mdc-card__media">
                    <ul className="mdc-image-list--with-text-protection my-image-list">
                        <li className="mdc-image-list__item">
                            <div className="mdc-image-list__image-aspect-container">
                                <img className="mdc-image-list__image" src={this.props.image} alt=""></img>
                            </div>
                            <div className="mdc-image-list__supporting">
                                <span className="mdc-image-list__label">{this.props.att1}</span>
                            </div>
                        </li>
                    </ul>
                </div>
            <div className="info-wrap">
                <div>
                    <span>{this.props.att2Span}</span>
                    <span className="right-span">{this.props.att2}</span>
                </div>

                <div>
                    <span>{this.props.att3Span}</span>
                    <span className="right-span">{this.props.att3}</span>
                </div>

                <div>
                    <span>{this.props.att4Span}</span>
                    <span className="right-span">{this.props.att4}</span>
                </div>
            </div>
            </div>
        );
    }

}

export default Card;