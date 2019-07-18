import { takeEvery, all, call } from 'redux-saga/effects';
import { types } from '../types';
import { fetchMessages, createMessage, updateMessage, deleteMessage } from './workers';

function* watchFetchMessages () {
    yield takeEvery(types.FETCH_MESSAGES, fetchMessages);
}

function* watchCreateMessage () {
    yield takeEvery(types.CREATE_MESSAGE_ASYNC, createMessage);
}

function* watchUpdateMessage () {
    yield takeEvery(types.UPDATE_MESSAGE_ASYNC, updateMessage);
}

function* watchDeleteMessage () {
    yield takeEvery(types.DELETE_MESSAGE_ASYNC, deleteMessage);
}

export function* watchMessages () {
    yield all([
        call(watchFetchMessages), 
        call(watchCreateMessage),
        call(watchUpdateMessage),
        call(watchDeleteMessage)
    ]);
}