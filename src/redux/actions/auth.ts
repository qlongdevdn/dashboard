import { AxiosError } from 'axios';
import { createAction, createAsyncAction } from 'typesafe-actions';
import { userLoginRequest, userLoginSuccess } from '../../type/auth.type';

export const loginRequest = createAsyncAction('LOG_USERS_REQUEST', 'LOG_USERS_SUCCESS', 'LOG_USERS_FAILURE')<userLoginRequest, userLoginSuccess, AxiosError>();

export const userlogout = createAction('USER_LOGOUT')<void>();
