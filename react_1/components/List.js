import React, { Component } from 'react';
import UserList from './UserList';
import NewUser from './NewUser';

export default class List extends Component {
  constructor() {
    super();
    this.state = {
      userList: [
        {
          name:'Bill',
          id: Math.random().toString()
        },
        {
          name:'John',
          id: Math.random().toString()
        }
      ]};
    this.update = this.update.bind(this);
    this.deleteUser = this.deleteUser.bind(this);
  }
  
  update(newUser) {
    let user = {name: newUser, id: Math.random().toString()};
    this.setState({
      userList: this.state.userList.concat(user)
    });
  }
  
  deleteUser(id) {
    let newUserList = this.state.userList.filter(obj => obj.id !== id);
    this.setState({
      userList: newUserList
    });
  }
  
  render() {
    return (
      <div>
        <UserList 
          list={this.state.userList} 
          deleteUser={this.deleteUser}
        />
        <NewUser update={this.update} />
      </div>
    );
  }
}
