import React, { Component } from 'react';
import './Login.css'
import * as logo from '../../assets/logo-big.png'
import { Container, Row, Col, Button } from 'reactstrap';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faUser, faLock } from '@fortawesome/free-solid-svg-icons'
class Login extends Component {
  constructor(props) {
    super();
    this.state = {
      username: '',
      password: '',
      error: ''
    }
    this.handlePassChange = this.handlePassChange.bind(this);
    this.handleUserChange = this.handleUserChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.dismissError = this.dismissError.bind(this);
  }

  dismissError() {
    this.setState({ error: '' });
  }

  handleSubmit(evt) {
    evt.preventDefault();

    if (!this.state.username) {
      return this.setState({ error: 'Username is required' });
    }

    if (!this.state.password) {
      return this.setState({ error: 'Password is required' });
    }

    return this.setState({ error: '' });
  }

  handleUserChange(evt) {
    this.setState({
      username: evt.target.value,
    });
  };

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
                  this.state.error &&
                  <h3 data-test="error" onClick={this.dismissError}>
                    <button onClick={this.dismissError}>✖</button>
                    {this.state.error}
                  </h3>
                }
                <div className="input-group mb-2">
                  <input className="form-control form-control-lg py-2 border-right-0 border" data-test="username" value={this.state.username} type="search" placeholder="Email" id="example-search-input" onChange={this.handleUserChange} />
                  <span className="input-group-append">
                    <div className="iconInput input-group-text">
                      {/* <FontAwesomeIcon icon={faUser} /> */}
                      <i className="fa fa-user"></i>
                    </div>
                  </span>
                </div>
                <div className="input-group mb-2">
                  <input className="form-control form-control-lg py-2 border-right-0 border" data-test="password" value={this.state.password} type="search" placeholder="Password" id="example-search-input" onChange={this.handlePassChange} />
                  <span className="input-group-append">
                    <div className="iconInput input-group-text">
                      {/* <FontAwesomeIcon icon={faLock} /> */}
                      <i className="fa fa-lock"></i>
                    </div>
                  </span>
                </div>
                <div className="forgotLogin text-right mb-4">
                  <a href="#"><span>Forgot password?</span></a>
                </div>
                <div className="submitBtn mb-4">
                  <Button size="lg" color="primary" block>LOGIN</Button>{}
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
