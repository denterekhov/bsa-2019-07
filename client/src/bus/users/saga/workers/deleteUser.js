import { put, apply } from 'redux-saga/effects';
import { api } from '../../../../REST';
import { userActions } from '../../actions';
import { uiActions } from '../../../ui/actions';

export function* deleteUser ({ payload: id }) {
    try {
        yield put(uiActions.startFetching());
        const response = yield apply(api, api.users.deleteUser, [id]);
        if (response.status !== 200) {
            throw new Error();
        }
        yield put(userActions.deleteUser(id));
    } catch (error) {
        console.error(error.message, 'deleteUser worker');
    } finally {
        yield put(uiActions.stopFetching());
    }
}
