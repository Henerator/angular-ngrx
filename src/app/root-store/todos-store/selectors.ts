import { createFeatureSelector, createSelector, MemoizedSelector } from '@ngrx/store';
import { Todo } from 'src/app/models/todo.model';
import { State } from './state';

const getError = (state: State): any => state.error;
const getIsLoading = (state: State): boolean => state.isLoading;
const getItems = (state: State): Todo[] => state.items;

export const selectTodosState: MemoizedSelector<
    object,
    State
> = createFeatureSelector<State>('todos');

export const selectTodosError: MemoizedSelector<object, any> = createSelector(
    selectTodosState,
    getError
);
export const selectTodosIsLoading: MemoizedSelector<object, boolean> = createSelector(
    selectTodosState,
    getIsLoading
);
export const selectTodosItems: MemoizedSelector<object, Todo[]> = createSelector(
    selectTodosState,
    getItems
);
