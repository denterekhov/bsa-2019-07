import { takeEvery, all, call } from 'redux-saga/effects';
import { types } from '../types';
import { fetchUsers, createUser, updateUser, deleteUser } from './workers';

function* watchFetchUsers () {
    yield takeEvery(types.FETCH_USERS, fetchUsers);
}

function* watchCreateUser () {
    yield takeEvery(types.CREATE_USER_ASYNC, createUser);
}

function* watchUpdateUser () {
    yield takeEvery(types.UPDATE_USER_ASYNC, updateUser);
}

function* watchDeleteUser () {
    yield takeEvery(types.DELETE_USER_ASYNC, deleteUser);
}

export function* watchUsers () {
    yield all([
        call(watchFetchUsers), 
        call(watchCreateUser),
        call(watchUpdateUser),
        call(watchDeleteUser)
    ]);
}