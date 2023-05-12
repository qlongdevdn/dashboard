import { combineReducers } from 'redux';
import { createReducer } from 'typesafe-actions';

import { InitialAuth } from '../../type/auth.type';
import { loginRequest } from '../actions/auth';

const initialAuth: InitialAuth = {
    isAuthenticated: true
};

const AuthReducer = combineReducers({
    auth: createReducer<InitialAuth>(initialAuth).handleAction(loginRequest.success, (state: InitialAuth) => {
        return {
            ...state,
            isAuthenticated: true
        };
    })
});

export default AuthReducer;
