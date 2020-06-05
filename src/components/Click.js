import React from 'react'
import Hod from './Hod'


class Click extends React.Component{
	constructor(props){
		super(props)
		this.state ={
			count:0
		}
	}

	// changeCount(){
	// 	this.setState((prevState, props) => ({
	// 		count : prevState.count+1
	// 	}))
	// }

	
	render(){
		return(
			<button onClick={this.props.changeCount.bind(this)} >Clicks {this.state.count}</button>
		)
	}
}

export default Hod(Click);