import {
    CHANGE_SEARCH_FIELD,
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCCESSS,
    REQUEST_ROBOTS_FAILED,
} from './constants.js'

export const setSearchField = (text) => {
    return ({
        type: CHANGE_SEARCH_FIELD,
        payload: text,
    })
}
export const requestRobots = () => (dispatch) => {
    dispatch({ type: REQUEST_ROBOTS_PENDING });

    async function getUsers(url) {
        try {
            const users = await fetch(url);
            const user = await users.json();

            if (users.status === 404)
            {
                return dispatch({ type: REQUEST_ROBOTS_FAILED, payload: user })
            }

            return dispatch({ type: REQUEST_ROBOTS_SUCCESSS, payload: user.results })
             
        } catch (err) {
            return dispatch({ type: REQUEST_ROBOTS_FAILED, payload: err })
        }
    }
    getUsers("https://swapi.co/api/people/?page=1");

    // fetch("https://jsonplaceholder.typicode.com/user")
    //     .then(resp => resp.json())
    //     .then(data => dispatch({ type: REQUEST_ROBOTS_SUCCESSS, payload: data }))
    //     .catch(error => dispatch({ type: REQUEST_ROBOTS_FAILED, payload: error }));

}

export const getNextPage = () => (dispatch) => {
    dispatch({ type: REQUEST_ROBOTS_PENDING });

    let currentUrl = "https://swapi.co/api/people";

    async function getNext(url) {
        try {
            const people = await fetch(url);
            let nextUrl = await people.json();
            let currentUrl = nextUrl.next

            const nextPeople  = await fetch (currentUrl)
            let result  = await nextPeople.json();

            return dispatch({ type: REQUEST_ROBOTS_SUCCESSS, payload: result.results})

        } catch (err) {
            return dispatch({ type: REQUEST_ROBOTS_FAILED, payload: err })
        }
    }
    getNext(currentUrl);

}