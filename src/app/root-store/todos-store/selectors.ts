import { createFeatureSelector, createSelector } from '@ngrx/store';
import { FEATURE_KEY } from './reducer';
import { State } from './state';

export const selectTodosState = createFeatureSelector<State>(FEATURE_KEY);

export const selectTodosError = createSelector(
    selectTodosState,
    state => state.error
);
export const selectTodosIsLoading = createSelector(
    selectTodosState,
    state => state.isLoading
);
export const selectTodosItems = createSelector(
    selectTodosState,
    state => state.items
);
