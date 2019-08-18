import React from 'react';

const Scroll = (props) => {
        return (
            <div style = {{overflowY:"scroll", scrollBehavior:"smooth",border:"3px hidden black", height: "50vh"}}>
                {props.children}
            </div>
        )
}

export default Scroll;