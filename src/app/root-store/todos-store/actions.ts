import { createAction, props } from '@ngrx/store';
import { Todo } from 'src/app/models/todo.model';

export enum ActionTypes {
    LOAD_REQUEST = '[Todos] Load items',
    LOAD_SUCCESS = '[Todos] Success',
    LOAD_FAILURE = '[Todos] Failure',
}

export const loadRequest = createAction(
    ActionTypes.LOAD_REQUEST
);
export const loadSuccess = createAction(
    ActionTypes.LOAD_SUCCESS,
    props<{ items: Todo[] }>()
);
export const loadFailure = createAction(
    ActionTypes.LOAD_FAILURE,
    props<{ error: string }>()
);
