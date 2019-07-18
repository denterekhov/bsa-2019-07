import { put, apply } from 'redux-saga/effects';
import { api } from '../../../../REST';
import { messagesActions } from '../../actions';
import { uiActions } from '../../../ui/actions';

export function* fetchMessages () {
    try {
        yield put(uiActions.startFetching());
        const response = yield apply(api, api.messages.fetchMessages);
        const data = yield apply(response, response.json);
        if (response.status !== 200) {
            throw new Error();
        }
        yield put(messagesActions.fillMessages(data));
    } catch (error) {
        console.error(error.message, 'fetchMessages worker');
    } finally {
        yield put(uiActions.stopFetching());
    }
}
