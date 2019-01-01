import React, { Component } from 'react';
import Card from '../components/Card';
// import {robots} from './robots';

class CardList extends Component {
    render() {
        return (
            <div>
                {this.props.robots.map((element, index) => {
                    return <Card
                        key={element.id}
                        id={this.props.robots[index].id}
                        name={this.props.robots[index].name}
                        email={this.props.robots[index].email}
                    />
                })}
            </div>
        )
    }
}
export default CardList