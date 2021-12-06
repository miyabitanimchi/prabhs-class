import { SET_USER, ADD_ANSWER } from './actions';

const userReducer = (
  state = { userInfo: { name: '', yearsOfExperience: '' }, answers: {} },
  action
) => {
  switch (action.type) {
    case SET_USER:
      return { ...state, userInfo: action.userInfo };
    case ADD_ANSWER:
      const answer = action.answer;
      return { ...state, answers: { ...state.answers, ...answer } };
    default:
      return state;
  }
};

export default userReducer;
