import { Action, createReducer, on } from '@ngrx/store';
import { initialState, State } from './state';
import * as UserActions from './actions';

export const FEATURE_KEY = 'user';

const userReducer = createReducer(
    initialState,
    on(UserActions.loadUser, (state) => ({
        ...state,
        isLoading: true,
        error: null,
    })),
    on(UserActions.loadUserSuccess, (state, { data }) => ({
        ...state,
        data,
        isLoading: false,
        error: null,
    })),
    on(UserActions.loadUserFailure, (state, { error }) => ({
        ...state,
        isLoading: false,
        error,
    })),

);

export function reducer(state: State | undefined, action: Action): State {
    return userReducer(state, action);
}
