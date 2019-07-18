import { types } from './types';

export const uiActions = {
    startFetching: () => ({
        type: types.START_FETCHING,
    }),
    
    stopFetching: () => ({
        type: types.STOP_FETCHING,
    }),
};
