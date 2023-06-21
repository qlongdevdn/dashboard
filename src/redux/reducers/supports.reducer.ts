import { createReducer } from 'typesafe-actions';
import { combineReducers } from 'redux';
import { getRandomBackgroundRequest } from '../actions/supports.action';
import { Action } from 'src/types/commons.type';

const initialState: any = {
    getRandomBackground: {
        isloading: false,
        payload: null,
        error: null
    },
    isLoading: false
};
const supportReducer = combineReducers({
    data: createReducer<any>(initialState)
        .handleAction(getRandomBackgroundRequest.request, (state: any) => {
            return Object.assign({}, state, {
                getRandomBackground: {
                    isloading: true
                }
            });
        })
        .handleAction(getRandomBackgroundRequest.success, (state: any, action: Action) => {
            return Object.assign({}, state, {
                getRandomBackground: {
                    isloading: false,
                    payload: action.payload,
                    error: null
                }
            });
        })
        .handleAction(getRandomBackgroundRequest.failure, (state: any, action: Action) => {
            return Object.assign({}, state, {
                getRandomBackground: {
                    isloading: false,
                    payload: null,
                    error: action
                }
            });
        })
});
export default supportReducer;
