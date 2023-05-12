import { combineReducers } from 'redux';

import AuthReducer from './slices/auth';

const appReducer = combineReducers({
    auth: AuthReducer
});

export type AppState = ReturnType<typeof appReducer>;

export default appReducer;
