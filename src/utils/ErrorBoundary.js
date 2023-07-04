import { Component } from "react";


export class ErrorBoundary extends Component{

    constructor(props){
        super(props)
        this.state={hasError:false}
    }

    static getDerivedStateFromError(error){
        return { hasError:true}
    }

    componentDidCatch(error,infoError){

        logErrorToMyService(error,infoError)
    }

    render(){
        if (this.state.hasError) {
            
            return <h1>Ha ocurrido un error.</h1>;
            }
            
            return this.props.children;
    }
}