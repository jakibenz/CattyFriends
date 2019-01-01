import React, { Component } from 'react';

class SearchBox extends Component {
    render() {
        return (
            <div className="pa4">
                <input className="pa3 ba bg-light-gray b--washed-green" type="search" placeholder="search cats" onChange = {this.props.searchType}/>
            </div>
        )
    }
}
export default SearchBox