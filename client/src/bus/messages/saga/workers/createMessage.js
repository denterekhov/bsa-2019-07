import { put, apply } from 'redux-saga/effects';
import { api } from '../../../../REST';
import { messagesActions } from '../../actions';
import { uiActions } from '../../../ui/actions';

export function* createMessage ({ payload: message }) {
    try {
        yield put(uiActions.startFetching());
        const response = yield apply(api, api.messages.createMessage, [message]);
        if (response.status !== 201) {
            throw new Error();
        }
        yield put(messagesActions.createMessage(message));
    } catch (error) {
        console.error(error.message, 'createMessage worker');
    } finally {
        yield put(uiActions.stopFetching());
    }
}
