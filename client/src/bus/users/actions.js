import { types } from './types';

export const userActions = {
  fetchUsers: () => ({
    type: types.FETCH_USERS,
  }),

  fillUsers: (users) => ({
    type:    types.FILL_USERS,
    payload: users,
  }),

  createUserAsync: (user) => ({
    type:    types.CREATE_USER_ASYNC,
    payload: user,
  }),

  createUser: (user) => ({
    type:    types.CREATE_USER,
    payload: user,
  }),

  updateUserAsync: (user) => ({
    type:    types.UPDATE_USER_ASYNC,
    payload: user,
  }),

  updateUser: (user) => ({
    type:    types.UPDATE_USER,
    payload: user,
  }),

  deleteUserAsync: (id) => ({
    type:    types.DELETE_USER_ASYNC,
    payload: id,
  }),

  deleteUser: (id) => ({
    type:    types.DELETE_USER,
    payload: id,
  }),
  
  setEditingUserId: (id) => ({
    type: types.SET_EDITING_USER_ID,
    payload: id,
  }),

  clearEditingUserId: () => ({
    type: types.CLEAR_EDITING_USER_ID,
  }),
};