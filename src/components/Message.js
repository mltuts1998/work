import React, { Component } from 'react';
import {
  useRouteMatch,
  useParams,
  useparams
} from "react-router-dom";



const comp = () =>{
	  let { a } = useParams();
	  return(
	    <h1>{a}</h1>
	  )
}

class Message extends Component{
	constructor(props){
		super(props)
		this.state = {
			message: 'Welcome Visitor',
			value: 10
		}
		this.changeMessage = this.changeMessage.bind(this)
	}


	changeMessage(){
		console.log(this)
		if(!localStorage.getItem('value')){
			alert(1)
			localStorage.setItem('value', this.state.value);
		}
		if(this.state.message === 'Welcome Visitor'){
			this.setState((prevState, props)=>({
				message: 'Go Back',
				value : prevState.value+props.value
			}))
			localStorage.setItem('value', Number(localStorage.getItem('value'))+1)
		}else{
			this.setState({
				message: 'Welcome Visitor',
				value : Number(localStorage.getItem('value'))+1
			})
			localStorage.setItem('value', Number(localStorage.getItem('value'))+1)
		}
	}
	render(){

		return(
			<div>
				<h1>{this.state.message}</h1>
				<small>{this.state.value}</small>
				<br/>
				{comp()}
				<button onClick={this.changeMessage} >Click</ button>
			</div>
		)
	}
}

export default Message;