import React from 'react';

class ErrorBoundary extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            hasError:false
        }
    }

    static getDerivedStateFromError(){
        console.log('HERE error occurred')
        return {hasError:true}
    }

    componentDidCatch(error, info){
        console.log('error::', error)
    }

    render(){
        console.log('boundary logged:::', this.state.hasError)
        if(this.state.hasError){
            console.log('rendered:::')
            return (<div>Something went wrong</div>)
        }
        return this.props.children
    }
}
export default ErrorBoundary