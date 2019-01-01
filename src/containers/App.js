import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox'
import Scroll from '../components/Scroll';
import './App.css';

class App extends Component {
    constructor() {
        super();
        this.state = {
            robots: [],
            searchfield: ""
        }
    }

    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(resp => resp.json())
        .then(user => {this.setState({robots : user})});

    }

    onSearchType = (event) => {
        return this.setState({ searchfield: event.target.value })
    }
    render() {
        const {robots, searchfield} = this.state

        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchfield.toLowerCase())
        })

        if (robots.length === 0) {
            return <h1 className="tc f1">
                <link href="https://fonts.googleapis.com/css?family=Alfa+Slab+One" rel="stylesheet"></link>
                LOADING</h1>;
        }
        else {
            return (
                <div className="tc">
                    <link href="https://fonts.googleapis.com/css?family=Alfa+Slab+One" rel="stylesheet"></link>
                    <h1 className="f1">CattyFriends</h1>
                    <SearchBox searchType={this.onSearchType} />
                    <Scroll>
                        <CardList robots={filteredRobots} />
                    </Scroll>
                </div>
            )
        }
    }
}
export default App