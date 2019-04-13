import React, { Component } from 'react';

class Auth extends Component {
  constructor(props) {
    super(props);

    this.onEmailChange = this.onEmailChange.bind(this);
    this.onPasswordChange = this.onPasswordChange.bind(this);
  }

  onEmailChange(event) {
    this.props.setEmailText(event.target.value);
  }

  onPasswordChange(event) {
    this.props.setPasswordText(event.target.value);
  }

  render() {
    return(
      <div>
        <h3>Sign In</h3>   
        <form>
          <div>
            <input
               type="text"
               name="login"
               autoComplete="off"
               placeholder="e-mail"
               value={this.props.email}
               onChange={this.onEmailChange}
            /> 
          </div>
          <div>
            <input
               type="password"
               name="password"
               autoComplete="off"
               placeholder="password"
               value={this.props.password}
               onChange={this.onPasswordChange}
            /> 
          </div>
        </form>
      </div>
    )
  }
}

export default Auth;
