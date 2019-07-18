import { types } from './types';

const initialState = {
  isAuthenticated: false,
  isAdmin: false,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FILL_PROFILE:
      return {
        ...action.payload
      };

    default:
      return state;
  }
}