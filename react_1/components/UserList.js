import React, { Component } from 'react';
import User from './User';
import './UserList.css';

export default class UserList extends Component {
  
  render() {
    return (
      <div className="list">
        <User 
          list={this.props.list} 
          deleteUser={this.props.deleteUser}
        />
      </div>  
    );
  }
}
