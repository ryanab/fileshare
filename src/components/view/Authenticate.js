import React,{ Component } from 'react'



class Authenticate extends Component {
  constructor(){
    super()
    this.state={
      credentials:{
        email:'',
        password:'',
        firstName:''
      }
    }
  }
  updateCredentials(field, event){
    console.log("UPDATE CREDENTIALS: " + JSON.stringify(event.target.value))
    // let updated = Object.assign({}, this.state.credentials)
    // updated[field] = event.target.value
    // this.setState({
    //   credentials: updated
    // })
  }


  register(field, event){
    console.log('register Click')
  }

  login(field, event){
    console.log('login')
  }
  render(){
    return(
      <div>
        <h2>Authenticate View</h2>
          <div>
            <h4>Register</h4>

            <input onChange={this.updateCredentials.bind(this, 'email')}  placeholder="Email" type="text" /><br />
            <input onChange={this.updateCredentials.bind(this, 'password')}  placeholder="Password" type="password" /><br />
            <input onChange={this.updateCredentials.bind(this, 'firstName')}  placeholder="First Name" type="password" /><br />

            <button onClick={this.register.bind(this)}>Join</button>
          </div>
          <hr />
          <div style={{marginTop:25}}>
            <h4>Login</h4>
            <input onChange={this.updateCredentials.bind(this, 'email')}  placeholder="Email" type="text" /><br />
            <input onChange={this.updateCredentials.bind(this, 'password')} placeholder="Password" type="password" /><br />
            <button onClick={this.login.bind(this)}>Login</button>
          </div>
      </div>
    )
  }
}

export default Authenticate
