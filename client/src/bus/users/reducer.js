import { types } from './types';

const initialState = { 
  userList: [],
  editingUserId: '',
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FILL_USERS:
      return {
        ...state,
        userList: [...action.payload]
      }

    case types.CREATE_USER:
      return {
        ...state,
        userList: [...state.userList, action.payload]
      }

    case types.DELETE_USER:
      return {
        ...state,
        userList: state.userList.filter(user => user.id !== action.payload)
      }

    case types.UPDATE_USER:
      return {
        ...state,
        userList: state.userList.map(user => user.id !== action.payload.id
          ? user
          : {
            ...action.payload
          }
        )
      }

    case types.SET_EDITING_USER_ID:
      return {
        ...state,
        editingUserId: action.payload,
      }

    case types.CLEAR_EDITING_USER_ID:
      return {
        ...state,
        editingUserId: '',
      }
      
    default:
      return state;
  }
}