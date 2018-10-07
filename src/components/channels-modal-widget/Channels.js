import React, { Component } from 'react';
import './Channels.css'
import ContinentsDropdown from '../dropdown'
export default class Channels extends Component {
  constructor(props) {
    super();
    this.state = {
  
    }
    this.handleSubmit = this.handleSubmit.bind(this);

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
  
    return this.setState({ error: '' });
  }



  render() {
    return (
      <div className="Channels">
        <ContinentsDropdown></ContinentsDropdown>
      </div >
    );
  }
}
