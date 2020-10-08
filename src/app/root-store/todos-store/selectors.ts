import { createFeatureSelector, createSelector } from '@ngrx/store';
import { TODOS_FEATURE_KEY } from './reducer';
import { TodosState } from './state';

export const selectTodosState = createFeatureSelector<TodosState>(TODOS_FEATURE_KEY);

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
