import { createAction, props } from '@ngrx/store';
import { ApiError } from '@models/api-error.model';
import { Todo } from '@models/todo.model';

export enum ActionTypes {
    LOAD_ITEMS = '[Todos] Load items',
    LOAD_SUCCESS = '[Todos] Load items success',
    LOAD_FAILURE = '[Todos] Load items failure',
}

export const loadItems = createAction(
    ActionTypes.LOAD_ITEMS
);
export const loadItemsSuccess = createAction(
    ActionTypes.LOAD_SUCCESS,
    props<{ items: Todo[] }>()
);
export const loadItemsFailure = createAction(
    ActionTypes.LOAD_FAILURE,
    props<{ error: ApiError }>()
);
