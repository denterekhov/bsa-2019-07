import { put, apply } from 'redux-saga/effects';
import { api } from '../../../../REST';
import { authActions } from '../../actions';
import { uiActions } from '../../../ui/actions';

export function* login ({ payload: credentials }) {
    try {
        yield put(uiActions.startFetching());
        const response = yield apply(api, api.auth.login, [credentials]);
        const data = yield apply(response, response.json);
        if (response.status !== 200) {
            throw new Error();
        }
        yield put(authActions.fillProfile(data));
    } catch (error) {
        console.error(error.message, 'login worker');
    } finally {
        yield put(uiActions.stopFetching());
    }
}
