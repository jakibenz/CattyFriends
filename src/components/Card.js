import React, { Component } from 'react';

class Card extends Component {
    render() {
        return (
            <div className="tc bg-light-blue dib br4 ma2 pa3 grow bw2 shadow-5">
                <img src={`https://robohash.org/set_set4/test${this.props.id}?size=200x200`} alt="robots"/>
                <div>
                    <h2>{this.props.name}</h2>
                    <p>{this.props.email}</p>
                </div>
            </div>
        )
    }
}
export default Card