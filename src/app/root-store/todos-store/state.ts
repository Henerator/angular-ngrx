import { Todo } from 'src/app/models/todo.model';

export interface State {
    items: Todo[] | null;
    isLoading?: boolean;
    error?: any;
}

export const initialState: State = {
    items: null,
    isLoading: false,
    error: null,
};
