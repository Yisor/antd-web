import * as TYPES from './types';

const initialState = {
  auth: null,
  user: {},
  status: null,
};

const login = (state = initialState, action) => {
  switch (action.type) {
    case TYPES.LOGGED_DOING:
      return {
        ...state,
        user: action.data,
        status: "Done"
      };
    case TYPES.LOGIN_DONING:
      return {
        ...state,
        auth: action.data,
        status: "Logining"
      };
    default:
      return state;
  }
}

export default login;



