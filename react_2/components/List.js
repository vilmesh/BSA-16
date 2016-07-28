import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../actions';
import UserList from './UserList';
import NewUser from './NewUser';
import FilterUser from './FilterUser';

class List extends Component {
  constructor() {
    super();
    this.update = this.update.bind(this);
    this.deleteUser = this.deleteUser.bind(this);
    this.searchUser = this.searchUser.bind(this);
  }
  
  update(newUser) {
    this.props.update(newUser);
  }
  
  deleteUser(id) {
    this.props.deleteUser(id);
  }
  
  searchUser(text) {
    this.props.searchUser(text);
  }
  
  render() {
    const { userList, searchText } = this.props.stateFromReducer;
    return (
      <div>
        <UserList 
          list={userList}
          searchText={searchText}
          deleteUser={this.deleteUser}
        />
        <NewUser update={this.update} />
        <FilterUser searchUser={this.searchUser} />
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actions, dispatch);
}

function mapStateToProps(state) {
  return {
    stateFromReducer: state
  };
}

const ListConnected = connect(mapStateToProps, mapDispatchToProps)(List);
export default ListConnected;
