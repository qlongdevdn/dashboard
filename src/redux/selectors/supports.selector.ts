import { createSelector } from 'reselect';
import { AppState } from '../combineReducer';

export const getRandomBackground = (state: AppState) => state?.support;

export const getRandomBackgroundDetail = createSelector(getRandomBackground, (item: any) => item?.data?.getRandomBackground?.payload);
