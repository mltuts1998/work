import React, { Component } from 'react';

class Lifecycle extends Component{
	constructor(props, context){
		super(props)
		this.state = {
			name: "viswas"
		}
		console.log("constructor")
	}
	
	static getDerivedStateFromProps(props, state){
		console.log('getDerivedStateFromProps')
	}

	componentDidMount(){
		console.log('didMount')
	}
	
	render(){
		return(
			{console.log('render')}
		)
	}


