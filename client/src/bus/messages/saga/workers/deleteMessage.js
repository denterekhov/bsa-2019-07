import { put, apply } from 'redux-saga/effects';
import { api } from '../../../../REST';
import { messagesActions } from '../../actions';
import { uiActions } from '../../../ui/actions';

export function* deleteMessage ({ payload: id }) {
    try {
        yield put(uiActions.startFetching());
        const response = yield apply(api, api.messages.deleteMessage, [id]);
        if (response.status !== 200) {
            throw new Error();
        }
        yield put(messagesActions.deleteMessage(id));
    } catch (error) {
        console.error(error.message, 'deleteMessage worker');
    } finally {
        yield put(uiActions.stopFetching());
    }
}
