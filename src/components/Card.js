import React  from 'react';

const Card = ({id, name, gender, birth_year}) => {
        return (
            <div className="tc bg-light-blue dib br4 ma2 pa3 grow dim shadow-5">
                <img src={`https://robohash.org/set_set3/starwarsfriends${id}?size=130x130`} alt="robots"/>
                <div>
                    <h2>{name}</h2>
                    <p>{gender}</p>
                    <p>{birth_year}</p>
                </div>
            </div>
        )
    }
export default Card