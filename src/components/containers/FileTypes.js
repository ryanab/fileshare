import React, { Component } from 'react'
import { APIManager } from '../../utils'
import { connect } from 'react-redux'
import actions from '../../actions'


class FileTypes extends Component{
	componentDidMount(){
		console.log("FILETYPES STATE: " + JSON.stringify(this.props.file.types))
	}
	render(){
		return(
			<div>

			</div>
		)
	}
}

const stateToProps = (state) => {
	return{
		file: state.files
	}
}

const dispatchToProps = (dispatch) => {
	return{
		selectFileType: (fileType) => dispatch(actions.selectFileType(fileType))
	}
}

export default connect(stateToProps, dispatchToProps)(FileTypes)
