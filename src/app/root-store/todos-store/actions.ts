import { Action } from '@ngrx/store';
import { Todo } from 'src/app/models/todo.model';

export enum ActionTypes {
    LOAD_REQUEST = '[Todos] Request',
    LOAD_SUCCESS = '[Todos] Success',
    LOAD_FAILURE = '[Todos] Failure',
}

export class LoadRequestAction implements Action {
    readonly type = ActionTypes.LOAD_REQUEST;
}
export class LoadSuccessAction implements Action {
    readonly type = ActionTypes.LOAD_SUCCESS;
    constructor(
        public payload: { items: Todo[] }
    ) {}
}
export class LoadFailureAction implements Action {
    readonly type = ActionTypes.LOAD_FAILURE;
    constructor(
        public payload: { error: string }
    ) {}
}

export type Actions =
    LoadRequestAction |
    LoadSuccessAction |
    LoadFailureAction;
