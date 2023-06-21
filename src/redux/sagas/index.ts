import { all, call } from 'redux-saga/effects';
import authSaga from './authSaga';
import supportsSaga from './supports.saga';
export default function* appSaga() {
    yield all([call(authSaga)]);
    yield all([call(supportsSaga)]);
}
