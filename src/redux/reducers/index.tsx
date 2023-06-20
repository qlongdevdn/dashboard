import { combineReducers } from 'redux';
import supportReducer from './supports.reducer';
const appReducer = combineReducers({
    support: supportReducer
});

export type AppState = ReturnType<typeof appReducer>;

export default appReducer;
