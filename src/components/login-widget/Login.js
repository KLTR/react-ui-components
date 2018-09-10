import React, { Component } from 'react';
import './Login.css'
import * as logo from '../../assets/logo-big.png'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faUser, faLock } from '@fortawesome/free-solid-svg-icons'
class Login extends Component {
  constructor(props) {
    super();
    this.state = {
      email: '',
      password: '',
      emailInvalid:'',
      error: ''
    }
    this.handlePassChange = this.handlePassChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.dismissError = this.dismissError.bind(this);
    this.validateEmail = this.validateEmail.bind(this);
  }

  dismissError() {
    this.setState({ error: '' });
  }

  handleSubmit(evt) {
    evt.preventDefault();

    if (!this.state.email) {
      this.setState({ error: 'Email is required' });

      if(!this.validateEmail()) {
         this.setState({emailInvalid: 'Invalid email'})
      }
      return;
    }

    if(!this.validateEmail()) {
      return this.setState({emailInvalid: 'Invalid email'})
    }

    if (!this.state.password) {
      return this.setState({ error: 'Password is required' });
    }

    return this.setState({ error: '' });
  }

  handleEmailChange(evt) {
    this.setState({
      email: evt.target.value,
    });
  };
   validateEmail() {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    console.log(re.test(this.state.email));
    if( !re.test(this.state.email)) {
      this.setState({emailInvalid: true})
    } else {
      this.setState({emailInvalid: false})
    }
    return re.test(this.state.email);
  }

  handlePassChange(evt) {
    this.setState({
      password: evt.target.value,
    });
  }
  render() {
    return (
      <div className="Login">
        <div className="container h-100 w-100">
          <div className="row center h-100">
            <div className="col-xl-6 col-md-8 col-sm-12">
              <div className="logo text-center mb-5">
                <img src={logo}></img>
              </div>
              <form onSubmit={this.handleSubmit}>
                {
                  // this.state.error &&
                  // <h3 data-test="error" onClick={this.dismissError}>
                  //   <button onClick={this.dismissError}>✖</button>
                  //   {this.state.error}
                  // </h3>
                }
                <div className={"input-group mt-2 "}>
                  <input 
                    className={"form-control form-control-lg py-2 border-right-0 " + (this.state.emailInvalid ? 'is-invalid' : '')}
                   data-test="email" value={this.state.email} type="search" placeholder="Email" id="example-search-input" onChange={this.handleEmailChange} />
                   
                  <span className="input-group-append">
                    <div className={"iconInput input-group-text " + (this.state.emailInvalid ? 'is-invalid text-red' : '')}>
                      <i className="fa fa-user"></i>
                    </div>
                  </span>
                  <div className="invalid-feedback">
          Please enter a vliad email address.
        </div>
                </div>

                
                <div className="input-group mt-2">
                  <input className="form-control form-control-lg py-2 border-right-0 " data-test="password" value={this.state.password} type="search" placeholder="Password" id="example-search-input" onChange={this.handlePassChange} />
                  <span className="input-group-append">
                    <div className="iconInput input-group-text">
                      <i className="fa fa-lock"></i>
                    </div>
                  </span>
                </div>
                <div className="forgotLogin text-right mb-4">
                  <a href="#"><span>Forgot password?</span></a>
                </div>
                <div className="submitBtn mb-4">
                  <button className="btn btn-primary btn-lg btn-block">LOGIN</button>
                </div>
                <div className="keepLogged text-center mb-4">
                  <label>
                    <input className="form-check-input" type="checkbox" /> Keep me logged in?
                  </label>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div >
    );
  }
}
export default Login;
