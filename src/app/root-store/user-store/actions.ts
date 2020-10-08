import { User } from '@models/user.model';
import { createAction, props } from '@ngrx/store';

export enum ActionTypes {
    LOAD_USER = '[User] Load user',
    LOAD_SUCCESS = '[User] Load user success',
    LOAD_FAILURE = '[User] Load user Failure',
}

export const loadUser = createAction(
    ActionTypes.LOAD_USER,
    props<{ id: number }>()
);
export const loadUserSuccess = createAction(
    ActionTypes.LOAD_SUCCESS,
    props<{ data: User }>()
);
export const loadUserFailure = createAction(
    ActionTypes.LOAD_FAILURE,
    props<{ error: string }>()
);
