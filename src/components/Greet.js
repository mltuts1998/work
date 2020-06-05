import React, { Component } from 'react'
import Message from './Message'
class Greet extends Component{
	constructor(props){
		super(props)
		this.state = {
			data: null,
			list : ["jhabar"]
		}
	}
	add = () => {
		this.setState((prevState, props) => ({
			list: prevState.list.concat(this.state.data)
		}))
	}

	delete = () =>{
		this.setState((prevState, props) => ({
			list: [...prevState.list.slice(0, prevState.list.length-1)]
		}))
	}

	handleDataChange = (event) => {
		this.setState({
			data: event.target.value,
		})
	}
	render(){
		return(
			<div>
				value
				<input type="text" value={this.state.data} onChange={this.handleDataChange.bind(this)} />
				<button onClick={this.add.bind(this)}>Add</button>
				<button onClick={this.delete.bind(this)}>Delete</button>
				<div>
				{
					this.state.list.map((item, index) => <h6>{index+1} | {item}</h6>)
				}
				</div>
			</div>
		)
	}
}

export default Greet;