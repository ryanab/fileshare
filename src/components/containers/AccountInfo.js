import React, { Component } from 'react'
import { connect } from 'react-redux'
import actions from '../../actions'
import DropZone from 'react-dropzone'
import sha1 from 'sha1'
import { APIManager, ImageHelper } from '../../utils'

class AccountInfo extends Component{

  constructor(){
    super()
    this.state = {
      profile: {}
    }
  }

  onInputChange(event){
    event.preventDefault()
    let updated = Object.assign({}, this.state.profile)
    updated[event.target.id] = event.target.value
    this.setState({
      profile: updated
    })
  }

  addAvatar(files){
    console.log('addAvatar: ')
    if(files.length == 0){
        alert('File is too large')
        return
      }
    const selectedFile = files[0]
    const cloudinaryInfo = ImageHelper.getAuthParams()

    APIManager.uploadFile(cloudinaryInfo.url, selectedFile, cloudinaryInfo.params)
    .then((result) => {
      console.log(JSON.stringify(result))
      let updated = Object.assign({}, this.state.profile)
      updated['image'] = result.secure_url
      this.setState({
        profile: updated
      })
      console.log(JSON.stringify(this.state.profile))
    })
    .catch((err) => {
      alert(err.message)
    })
  }

  submitUpdates(){
    this.props.updateAccount(this.state.profile, this.props.user.id)
  }

  render(){
    const user = this.props.user
    return(
      <div>
        Edit Account Info
        {
          (this.props.user == null) ? 
          <div>
            Not logged in
          </div>
          :
          <div>
            <h4>Edit Account Info</h4>
            <input onChange={this.onInputChange.bind(this)} id="firstName" type="text" placeholder={user.firstName}/> < br />
            <input onChange={this.onInputChange.bind(this)} id="email" type="text" placeholder={user.email} />< br/>
            <DropZone style={{border:'none'}} onDrop={this.addAvatar.bind(this)} maxSize={10000000}>
              <button>Choose File</button>
            </DropZone><br />
            <button onClick={this.submitUpdates.bind(this)} type="submit">Submit Changes</button>
          </div>
        }
      </div>
    )
  }
} 

const stateToProps = (state) => {
  return {
    user: state.account.user
  }
}

const dispatchToProps = (dispatch) => {
  return{
    updateAccount: (params, id) => dispatch(actions.updateAccount(params, id))
  }
}

export default connect(stateToProps, dispatchToProps)(AccountInfo)