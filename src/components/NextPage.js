import React from 'react';

const NextPage = (props) => {
    console.log(props)
    return (
        <div>
            <button className="ma4 sans-serif" type="button" onClick={() => props.fetchNext(false)}>PREV</button>
            <button className="ma4 sans-serif" type="button" disabled={props.isLastPage} onClick={() => props.fetchNext(true)}>NEXT</button>
        </div>
    )
}
export default NextPage;