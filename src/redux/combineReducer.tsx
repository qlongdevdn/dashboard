import { combineReducers } from 'redux';

import AuthReducer from './reducers/auth';
import supportReducer from './reducers/supports.reducer';
const appReducer = combineReducers({
    auth: AuthReducer,
    support: supportReducer
});

export type AppState = ReturnType<typeof appReducer>;

export default appReducer;
