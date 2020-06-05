import React from 'react'

const Hod = OriginalComponent => {
	class NewComponent extends React.Component{
		changeCount(){
			this.setState((prevState, props) => ({
				count : prevState.count+1 
			}))
		}

		render(){
			return <OriginalComponent changeCount={this.changeCount}/>
		}
	}
	return NewComponent
}

export default Hod;