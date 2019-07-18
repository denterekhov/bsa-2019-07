import { types } from './types';

export const authActions = {
  loginAsync: (userCredentials) => ({
    type: types.LOGIN_ASYNC,
    payload: userCredentials,
  }),

  fillProfile: (permissions) => ({
    type: types.FILL_PROFILE,
    payload: permissions,
  }),
};