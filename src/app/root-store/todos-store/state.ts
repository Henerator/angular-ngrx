import { Todo } from 'src/app/models/todo.model';

export interface TodosState {
    items: Todo[] | null;
    isLoading?: boolean;
    error?: any;
}

export const initialState: TodosState = {
    items: null,
    isLoading: false,
    error: null,
};
