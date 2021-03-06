import {
    CHANGE_SEARCH_FIELD,
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCCESSS,
    REQUEST_ROBOTS_FAILED,
    REQUEST_ROBOTS_NEXTPAGE,
    CHECK_ROBOTS_LASTPAGE
} from './constants.js'

export const setSearchField = (text) => {
    return ({
        type: CHANGE_SEARCH_FIELD,
        payload: text,
    })
}
export const requestRobots = (url) => (dispatch) => {
    dispatch({ type: REQUEST_ROBOTS_PENDING });

    async function getUsers(url) {
        try {
            const users = await fetch(url);
            const user = await users.json();

            if (users.status === 404)
            {
                return dispatch({ type: REQUEST_ROBOTS_FAILED, payload: user })

            }else{
                if (user.next === null){
                    dispatch({ type: CHECK_ROBOTS_LASTPAGE, payload: true})      
                }
                else{
                    dispatch({ type: CHECK_ROBOTS_LASTPAGE, payload: false})
                }
                return dispatch({ type: REQUEST_ROBOTS_SUCCESSS, payload: user.results })
            }

        } catch (err) {
            return dispatch({ type: REQUEST_ROBOTS_FAILED, payload: err })
        }
    }
    getUsers(url);

    // fetch("https://jsonplaceholder.typicode.com/user")
    //     .then(resp => resp.json())
    //     .then(data => dispatch({ type: REQUEST_ROBOTS_SUCCESSS, payload: data }))
    //     .catch(error => dispatch({ type: REQUEST_ROBOTS_FAILED, payload: error }));

}

export const getNextPage = (url, isNextButton) => (dispatch) => {

    async function getNext(url) {
        try {
            const result  = await fetch (url)
            const nextUrl  = await result.json();

            if (nextUrl.next !== null && isNextButton){
                return dispatch({ type: REQUEST_ROBOTS_NEXTPAGE, payload: nextUrl.next})

            }else if (nextUrl.previous !== null && !isNextButton){
                return dispatch({ type: REQUEST_ROBOTS_NEXTPAGE, payload: nextUrl.previous})
                
            }else{
                return dispatch({ type: REQUEST_ROBOTS_NEXTPAGE, payload: url })
            }
        } catch (err) {
            return dispatch({ type: REQUEST_ROBOTS_FAILED, payload: err })
        }
    }
    getNext(url);

}