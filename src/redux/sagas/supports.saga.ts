import { all, call, put, takeLatest } from 'redux-saga/effects';
import { SagaIterator } from '@redux-saga/types';
import { getRandomBackgroundRequest } from '../actions/supports.action';
import { getSupports } from 'src/services/api_support';

function* getRandomBackground(action: ReturnType<typeof getRandomBackgroundRequest.request>): SagaIterator {
    try {
        const { count, query, host } = action.payload;
        const urlDebt = () =>
            getSupports(host + 'photos/random', {
                query: query,
                count: count
            });
        const response = yield call(urlDebt);
        yield put(getRandomBackgroundRequest.success(response.data));
    } catch (e: any) {
        // warningToast(e?.response?.data?.error?.message);
        yield put(getRandomBackgroundRequest.failure(e.message));
    }
}

function* supportsSaga() {
    yield all([takeLatest(getRandomBackgroundRequest.request, getRandomBackground)]);
}

export default supportsSaga;
