import React, {Component} from 'react'

class ErrorBoundry extends Component {
    constructor(props) {
        super(props)
        this.state = {
            hasError: false
        }
    }
    componentDidCatch(){
        this.setState ({hasError: true})
    }
    render (){
        if(this.state.hasError) {
            return (
                <h1>Error Occured</h1>
            )
        }else if (this.props.status) {
            return <h1 className="tc f1">
                Loading </h1>;
        }else if (this.props.errorLog.length !== 0) {
            console.log(JSON.stringify(this.props.errorLog))
            return <h1 className="tc f1">
                Error </h1>
        }else{
            return this.props.children
        }
    }
}
export default ErrorBoundry;
