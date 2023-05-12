import { all, call, put, takeLatest } from 'redux-saga/effects';
import { SagaIterator } from '@redux-saga/types';

import { loginRequest } from '../actions/auth';
import APIService from '../../services/api';

const api = new APIService();

function* authSaga() {
    // yield all([takeLatest(loginRequest.request, fetchUserLogin)]);
}

function* fetchUserLogin(data: any): SagaIterator {
    const urlencoded = new URLSearchParams();
    urlencoded.append('email', data.payload.email);
    urlencoded.append('password', data.payload.password);
    try {
        const urlLogin = () => api.post(`auth/login`, urlencoded);
        const response: any = yield call(urlLogin);
        yield put(loginRequest.success(response.data));
    } catch (e: any) {
        yield put(loginRequest.failure(e.message));
    }
}

export default authSaga;
