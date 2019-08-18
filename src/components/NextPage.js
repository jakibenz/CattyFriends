import React from 'react';

const NextPage = (props) => {
    return (
        <div>
            <button className="ma4 sans-serif" type="button" onClick={() => props.fetchNext(false)}>PREV</button>
            <button className="ma4 sans-serif" type="button" onClick={() => props.fetchNext(true)}>NEXT</button>
        </div>
    )
}
export default NextPage;