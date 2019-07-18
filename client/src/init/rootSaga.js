import { all, call } from 'redux-saga/effects';
import { watchAuth } from '../bus/auth/saga/watchers';
import { watchMessages } from '../bus/messages/saga/watchers';
import { watchUsers } from '../bus/users/saga/watchers';

export function* rootSaga () {
  yield all([call(watchAuth), call(watchMessages), call(watchUsers)]);
}