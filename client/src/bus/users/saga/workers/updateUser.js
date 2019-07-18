import { put, apply } from 'redux-saga/effects';
import { api } from '../../../../REST';
import { userActions } from '../../actions';
import { uiActions } from '../../../ui/actions';

export function* updateUser ({ payload }) {
    try {
        yield put(uiActions.startFetching());
        const response = yield apply(api, api.users.updateUser, [payload]);
        if (response.status !== 200) {
            throw new Error();
        }        
        yield put(userActions.updateUser(payload));
    } catch (error) {
        console.error(error.message, 'updateUser worker');
    } finally {
        yield put(uiActions.stopFetching());
    }
}
