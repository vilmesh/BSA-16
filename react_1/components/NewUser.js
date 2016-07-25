import React, { Component } from 'react';
import './NewUser.css';

export default class AddNewUser extends Component {
  constructor(){
    super();
    this.state = { user: '' };
    this.changeInput = this.changeInput.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }
  
  changeInput(e){
    this.setState({ user: e.target.value });
  }
  
  submitForm(e){
    e.preventDefault();
    this.props.update(this.state.user);
    this.setState({user: ''});
  }
  
  render() {
    const { user } = this.state;
    return (
      <form className="addForm" onSubmit={this.submitForm}>
        <input type="text" ref="user" 
          onChange={this.changeInput} 
          value={user}
        />
        <input type="submit" value="Add"/>
      </form>
    );
  }
}


