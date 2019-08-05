import React from 'react';

const SearchBox = (props) => {
        return (
            <div className="pa4" >
                <input className="pa3 ba br-pill outline-transparent bg-washed-blue b--washed-green" type="search" placeholder="search cats" onChange = {props.searchType}/>
            </div>
        )
}
export default SearchBox