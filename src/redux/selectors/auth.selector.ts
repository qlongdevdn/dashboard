import { createSelector } from 'reselect';
import { AppState } from '../combineReducer';

export const getAuth = (state: AppState) => state?.auth;

export const isAuthenticated = createSelector(getAuth, (data: any) => data.auth.isAuthenticated);
