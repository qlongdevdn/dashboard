import { all, call } from 'redux-saga/effects';
import authSaga from './authSaga';

export default function* appSaga() {
    yield all([call(authSaga)]);
}
