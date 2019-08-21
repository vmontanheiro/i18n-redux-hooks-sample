import { createAction } from 'redux-actions';

export const RESET_APP_STORE = `RESET_APP_STORE`;
export const resetAppStore = createAction(RESET_APP_STORE);

export const SET_APP = `SET_APP`;
export const setApp = createAction(SET_APP);

