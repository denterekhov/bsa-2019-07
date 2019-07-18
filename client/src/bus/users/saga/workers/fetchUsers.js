import { put, apply } from 'redux-saga/effects';
import { api } from '../../../../REST';
import { userActions } from '../../actions';
import { uiActions } from '../../../ui/actions';

export function* fetchUsers () {
    try {
        yield put(uiActions.startFetching());
        const response = yield apply(api, api.users.fetchUsers);
        const data = yield apply(response, response.json);
        if (response.status !== 200) {
            throw new Error();
        }
        yield put(userActions.fillUsers(data));
    } catch (error) {
        console.error(error.message, 'fetchUsers worker');
    } finally {
        yield put(uiActions.stopFetching());
    }
}
