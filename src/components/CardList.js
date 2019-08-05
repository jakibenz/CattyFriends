import React from 'react';
import Card from '../components/Card';
// import {robots} from './robots';

const CardList = ({ robots }) => {
    return (
        <div>
            {robots.map((element, index) => {
                return <Card
                    key={element.url}
                    id={robots[index].url}
                    name={robots[index].name}
                    gender={robots[index].gender}
                    birth_year={robots[index].birth_year}
                />
            })}
        </div>
    )
}
export default CardList