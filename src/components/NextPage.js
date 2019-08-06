import React from 'react';

const NextPage = (props) => {
    return (
        <div>
            <button className="ma4 sans-serif" type="button" onClick={(props.fetchNext)}>NEXT</button>
        </div>
    )
}
export default NextPage;