import { SET_USER, ADD_ANSWER } from './actions';

const userReducer = (state = {}, action) => {
  switch (action.type) {
    case SET_USER:
      return action.users;
    case ADD_ANSWER:
      return { ...state, answers: action.answers };
    default:
      return;
  }
};

export default userReducer;
