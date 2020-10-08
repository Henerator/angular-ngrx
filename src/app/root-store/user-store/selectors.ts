import { createFeatureSelector, createSelector } from '@ngrx/store';
import { FEATURE_KEY } from './reducer';
import { State } from './state';

export const selectUserState = createFeatureSelector<State>(FEATURE_KEY);

export const selectUserError = createSelector(
    selectUserState,
    state => state.error
);
export const selectUserIsLoading = createSelector(
    selectUserState,
    state => state.isLoading
);
export const selectUser = createSelector(
    selectUserState,
    state => state.data
);
