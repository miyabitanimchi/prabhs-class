const SET_USER = 'SET_USER';
const ADD_ANSWER = 'ADD_ANSWER';

export const setUser = () => ({
  type: SET_USER,
  // payload: userList,
});

export const addAnswer = (answer) => ({
  type: ADD_ANSWER,
  payload: answer,
});
