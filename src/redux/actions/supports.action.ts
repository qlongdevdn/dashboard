import { AxiosError } from 'axios';
import { createAsyncAction } from 'typesafe-actions';

export const getRandomBackgroundRequest = createAsyncAction('GET_RANDOM_BACKGROUND_REQUEST', 'GET_RANDOM_BACKGROUND_SUCCESS', 'GET_RANDOM_BACKGROUND_FAILURE')<
    any,
    any,
    AxiosError
>();
