import { combineReducers } from 'redux';
import { messagesReducer as messages } from '../bus/messages/reducer';
import { userReducer as users } from '../bus/users/reducer';
import { authReducer as auth } from '../bus/auth/reducer';
import { uiReducer as ui } from '../bus/ui/reducer';

export const rootReducer = combineReducers({
  messages,
  users,
  auth,
  ui,
});