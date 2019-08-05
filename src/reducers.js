import {
    CHANGE_SEARCH_FIELD,
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCCESSS,
    REQUEST_ROBOTS_FAILED,
} from './constants.js'

const initialStateSearch = {
    searchfield: '',
}

export const searchRobots = (state = initialStateSearch, action = {}) => {
    switch (action.type) {
        case CHANGE_SEARCH_FIELD:
            return { ...state, searchfield: action.payload };
        default:
            return state;
    }
}

const initialStateRobots = {
    robots: [],
    isPending : false,
    errorMsg : ''
}

export const requestRobots = (state = initialStateRobots, action = {}) => {
    switch (action.type){
        case REQUEST_ROBOTS_PENDING:
            return {...state, isPending: true};
        case REQUEST_ROBOTS_SUCCESSS:
            return {...state,  isPending: false, robots: action.payload};
        case REQUEST_ROBOTS_FAILED:
            return {...state,  isPending: false, errorMsg: action.payload};
        default:
            return state;
    }
}

export const reducer_getNextPage = (state = initialStateRobots, action = {}) => {
    switch (action.type){
        case REQUEST_ROBOTS_PENDING:
            return {...state, isPending: true};
        case REQUEST_ROBOTS_SUCCESSS:
            return {...state,  isPending: false, robots: action.payload};
        case REQUEST_ROBOTS_FAILED:
            return {...state,  isPending: false, errorMsg: action.payload};
        default:
            return state;
    }
}