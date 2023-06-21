import { all, call, put, takeLatest } from 'redux-saga/effects';
import { SagaIterator } from '@redux-saga/types';
import { getRandomBackgroundRequest } from '../actions/supports.action';
import { getSupports } from 'src/services/api_support';
import { warningToast } from 'src/commons/toast';

function* getRandomBackground(action: ReturnType<typeof getRandomBackgroundRequest.request>): SagaIterator {
    try {
        const { count, query, host, key } = action.payload;
        const urlDebt = () =>
            getSupports(host + 'photos/random', {
                query: query,
                count: count,
                client_id: key
            });
        const response = yield call(urlDebt);
        yield put(getRandomBackgroundRequest.success(response.data));
    } catch (e: any) {
        warningToast(e?.response?.data?.errors[0]);
        yield put(getRandomBackgroundRequest.failure(e.message));
    }
}

function* supportsSaga() {
    yield all([takeLatest(getRandomBackgroundRequest.request, getRandomBackground)]);
}

export default supportsSaga;
