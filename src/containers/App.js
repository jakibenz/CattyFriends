import React, {Component} from 'react';
import ErrorBoundry from '../components/ErrorBoundry';
import { connect } from 'react-redux';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox'
import Scroll from '../components/Scroll';
import NextPage from '../components/NextPage';
import './App.css';

import { setSearchField, requestRobots, getNextPage } from '../actions';

const mapStateToProps = (state) => {
    return {
        searchfield: state.reducer_searchRobots.searchfield,
        robots: state.reducer_requestRobots.robots,
        errorMsg: state.reducer_requestRobots.errorMsg,
        isPending: state.reducer_requestRobots.isPending,
        url: state.reducer_getNextPage.currentUrl
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        whenSearching: (event) => dispatch(setSearchField (event.target.value)),
        onRequestRobots: (url) => {
            dispatch(requestRobots(url));
        },
        onClickNext: (url) => {
            dispatch(getNextPage(url))
        }
    }
}

class App extends Component {    
    // constructor() {
    //     super()
    //     this.state = {
    //         robots: [],
    //     }
    // }

    componentDidMount() {
        // // console.log(props.store.getState())
        // fetch("https://jsonplaceholder.typicode.com/users")
        // .then(resp => resp.json())
        // .then(user => {this.setState({robots : user})});
        this.props.onRequestRobots(this.props.url);
    }

    componentDidUpdate(prevProps) {
        // Typical usage (don't forget to compare props):
        if (this.props.url !== prevProps.url) {
            this.props.onRequestRobots(this.props.url);
        }
      }

    // onSearchType = (event) => {
    //     return this.setState({ searchfield: event.target.value })
    // }

    render () {
        // const {robots} = this.state
        const {searchfield, whenSearching, robots, isPending, errorMsg} = this.props
        const filteredRobots = robots.filter(robot => {   
            return robot.name.toLowerCase().includes(searchfield.toLowerCase())
        })

        console.log(this.props)
        return (
            <div className="tc">
                <h1 className="f1">STAR WARS</h1>
                <SearchBox searchType={whenSearching} />
                <ErrorBoundry status={isPending} errorLog={errorMsg}>
                    <Scroll>
                        <CardList robots={filteredRobots} />
                    </Scroll>
                </ErrorBoundry>
                <NextPage fetchNext={()=>this.props.onClickNext(this.props.url)} />
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)