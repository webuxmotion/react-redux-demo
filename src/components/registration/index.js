import React, { Component } from 'react';

class Registration extends Component {
  constructor(props) {
    super(props);

    this.onEmailChange = this.onEmailChange.bind(this);
    this.onPasswordChange = this.onPasswordChange.bind(this);
    this.onRepeatPasswordChange = this.onRepeatPasswordChange.bind(this);
  }

  onEmailChange(event) {
    this.props.setEmailText(event.target.value);
  }

  onPasswordChange(event) {
    this.props.setPasswordText(event.target.value);
  }

  onRepeatPasswordChange(event) {
    this.props.setRepeatPasswordText(event.target.value);
  }

  render() {
    return(
      <div>
        <h3>Registration</h3>   
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
          <div>
              <input
               type="password"
               name="repeat_password"
               autoComplete="off"
               placeholder="repeat password"
               value={this.props.repeatPassword}
               onChange={this.onRepeatPasswordChange}
            /> 
          </div>
        </form>
      </div>
    )
  }
}

export default Registration;
