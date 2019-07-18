import { put, apply } from 'redux-saga/effects';
import { api } from '../../../../REST';
import { userActions } from '../../actions';
import { uiActions } from '../../../ui/actions';

export function* createUser ({ payload: user }) {
    try {
        yield put(uiActions.startFetching());
        const response = yield apply(api, api.users.createUser, [user]);
        if (response.status !== 201) {
            throw new Error();
        }
        yield put(userActions.createUser(user));
    } catch (error) {
        console.error(error.message, 'createUser worker');
    } finally {
        yield put(uiActions.stopFetching());
    }
}
