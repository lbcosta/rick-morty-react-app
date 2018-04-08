import React, { Component } from 'react';
import '../../node_modules/materialize-css/dist/css/materialize.css';
import '../../node_modules/materialize-css/dist/js/materialize';
import '../css/custom.css';
class Card extends Component {



    render() {

        return (
            <div className="card">
                <div className="card-image waves-effect waves-block waves-light">
                    <img className="activator" src={this.props.image} alt=''></img>
                </div>
                <div className="card-content">
                    <span className="card-title activator grey-text text-darken-4" id="my-card-title">{this.props.att1}</span>
                </div>
                <div className="card-reveal" id="card-info">
                    <span className="card-title grey-text text-darken-4">{this.props.att1}<i className="material-icons right">close</i></span>
                    <div className="info-wrap">
                        <div>
                            <span>{this.props.att2Span}</span>
                            <span className="right-span">{this.props.att2}</span>
                            <hr/>
                        </div>

                        <div>
                            <span>{this.props.att3Span}</span>
                            <span className="right-span">{this.props.att3}</span>
                            <hr/>
                        </div>

                        <div>
                            <span>{this.props.att4Span}</span>
                            <span className="right-span">{this.props.att4}</span>
                            <hr/>
                        </div>

                        <div>
                            <span>Episodios</span>
                            {
                                this.props.att5.map((episode) => {
                                    return (
                                        <div id="epi-div">
                                            <span className="right-span" key={`episode.slice(40)`}>{episode.slice(40)}</span>
                                            <br />
                                        </div>  

                                    );
                                })
                            }
                        </div>
                    </div>


                </div>
            </div>
        );
    }

}

export default Card;