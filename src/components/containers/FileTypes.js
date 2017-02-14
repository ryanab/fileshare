import React, { Component } from 'react'
import { APIManager } from '../../utils'
import { connect } from 'react-redux'
import actions from '../../actions'


class FileTypes extends Component{
	componentDidMount(){
		console.log("FILETYPES STATE: " + JSON.stringify(this.props.file.types))
	}

	selectFileType(fileType,event){
		console.log('selectFileType: ' + fileType)
		event.preventDefault()
		 this.props.selectFileType(fileType)
	}

	render(){
		let content = this.props.files.map((fileType) => {
			return (
				<li key={fileType}>
					<a onClick={this.selectFileType.bind(this, fileType)} href="#">
						{fileType}
					</a>
				</li>
			)
		})

		return(
			<div>
				<ul>{content}</ul>
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
