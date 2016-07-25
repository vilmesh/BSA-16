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
  
  render() {
    const { list } = this.props;
    return (
      <div>
        {list.map((el, i) => {
          return ( 
            <div className="item" key={i}>{el.name}
              <button className="button" 
                id={el.id}
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
