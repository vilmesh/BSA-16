import React, { Component } from 'react';
import User from './User';
import './UserList.css';

export default class UserList extends Component {
  
  render() {
    const { list, searchText } = this.props;
    const filtredList = list.filter(user => user.name.startsWith(searchText));
    return (
      (filtredList.length === 0) ?
      <div className="list">
        <User 
          list={list}
          deleteUser={this.props.deleteUser}
        />
      </div>
      :
      <div className="list">
        <User 
          list={filtredList}
          deleteUser={this.props.deleteUser}
        />
      </div>
    );
  }
}
