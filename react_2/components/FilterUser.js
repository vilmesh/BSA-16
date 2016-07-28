import React, { Component } from 'react';

export default class FilterUser extends Component {
  constructor(){
    super();
    this.handleChange = this.handleChange.bind(this);
  }
  
  handleChange(e) {
    if(e.target.value) {
      this.props.searchUser(e.target.value);
    } else {
      this.props.searchUser(' ');
    }
  }
  
  render() {
    return ( 
      <input type="text" 
        placeholder="Find user"
        onChange={this.handleChange} 
      />
    );
  }
}
