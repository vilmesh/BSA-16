const initialState = {
  searchText: ' ',
  userList: [{
    name:'Bill',
    id: String(Math.random())
  },
  {
    name:'John',
    id: String(Math.random())
  },
  {
    name:'Walt',
    id: String(Math.random())
  },
  {
    name:'Jenny',
    id: String(Math.random())
  },
  {
    name:'Sarah',
    id: String(Math.random())
  }]
};

export default function listReducer(state = initialState, action) {
  switch (action.type) {
    
    case 'UPDATE_LIST': {
      const { name } = action;
      const newUser = {
        name,
        id: String(Math.random())
      };
      const userList = [...state.userList, newUser];
      return Object.assign({}, state, {
        userList
      });
    }
    
    case 'DELETE_USER': {
      const { id } = action;
      const userList = state.userList.filter(user =>  user.id !== id);
      return Object.assign({}, state, {
        userList
      }); 
    }
    
    case 'USER_SEARCH': {
      const { text: searchText } = action;
      return Object.assign({}, state, {
        searchText
      }); 
    }
    
    default: {
      return state;  
    }
  }
}