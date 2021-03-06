import { Action, createReducer, on } from '@ngrx/store';
import { initialState, State } from './state';
import * as TodosActions from './actions';

export const FEATURE_KEY = 'todos';

const todosReducer = createReducer(
    initialState,
    on(TodosActions.loadItems, (state) => ({
        ...state,
        isLoading: true,
        error: null,
    })),
    on(TodosActions.loadItemsSuccess, (state, { items }) => ({
        ...state,
        items,
        isLoading: false,
        error: null,
    })),
    on(TodosActions.loadItemsFailure, (state, { error }) => ({
        ...state,
        isLoading: false,
        error,
    })),

);

export function reducer(state: State | undefined, action: Action): State {
    return todosReducer(state, action);
}
