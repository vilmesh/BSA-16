import React, { Component } from 'react';
import './User.css';

export default class ListItem extends Component {
  constructor(){
    super();
    this.deleteOneUser = this.deleteOneUser.bind(this);
  }
  
  deleteOneUser(e){
    this.props.deleteUser(e.target.id);
  }
  
  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate', nextProps, nextState);
    return Boolean(nextProps.list.length !== this.props.list.length);
  }
  
  render() {
    const { list } = this.props;
    return (
      <div>
        {list.map(user => {
          return ( 
            <div className="item" 
              key={user.id}>
              {user.name}
              <button className="button" 
                id={user.id}
                onClick={this.deleteOneUser}>
                &#10006;
              </button>
            </div> 
          );
        })}
      </div> 
    );
  }
}
