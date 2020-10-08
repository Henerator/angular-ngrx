import { Action, createReducer, on } from '@ngrx/store';
import { initialState, TodosState } from './state';
import * as TodosActions from './actions';

export const TODOS_FEATURE_KEY = 'todos';

const reducer = createReducer(
    initialState,
    on(TodosActions.loadRequest, (state) => ({
        ...state,
        isLoading: true,
        error: null,
    })),
    on(TodosActions.loadSuccess, (state, { items }) => ({
        ...state,
        items,
        isLoading: false,
        error: null,
    })),
    on(TodosActions.loadFailure, (state, { error }) => ({
        ...state,
        isLoading: false,
        error,
    })),

);

export function todosReducer(state: TodosState | undefined, action: Action): TodosState {
    return reducer(state, action);
}
