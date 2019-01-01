import React, { Component } from 'react';

    class Scroll extends Component {
        render() {
            return (
                <div style = {{overflowY:"scroll", scrollBehavior:"smooth",border:"0.5px solid black", height: "350px"}}>
                    {this.props.children}
                </div>
            )
        }
    }

export default Scroll;