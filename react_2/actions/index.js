export function update(name) {
  const action = {
    type: 'UPDATE_LIST',
    name
  };
  return action;
}

export function deleteUser(id) {
  const action = {
    type: 'DELETE_USER',
    id
  };
  return action;
}

export function searchUser(text) {
  const action = {
    type: 'USER_SEARCH',
    text
  };
  return action;
}