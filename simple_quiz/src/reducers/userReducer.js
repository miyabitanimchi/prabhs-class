import { SET_USER } from '../actions/actions';

const userReducer = (state = { name: '', yearsOfExperience: '' }, action) => {
  switch (action.type) {
    case SET_USER:
      return action.userInfo;
    default:
      return state;
  }
};

export default userReducer;
