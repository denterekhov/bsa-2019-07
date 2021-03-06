import { put, apply } from 'redux-saga/effects';
import { api } from '../../../../REST';
import { messagesActions } from '../../actions';
import { uiActions } from '../../../ui/actions';
import { history } from '../../../../init/middleware';

export function* updateMessage ({ payload }) {
    try {
        yield put(uiActions.startFetching());
        const response = yield apply(api, api.messages.updateMessage, [payload]);
        if (response.status !== 200) {
            throw new Error();
        }
        yield put(messagesActions.updateMessage(payload));
        history.replace('/chat');
    } catch (error) {
        console.error(error.message, 'updateMessage worker');
    } finally {
        yield put(uiActions.stopFetching());
    }
}
