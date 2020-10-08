import { TodosStoreState } from './todos-store';
import { UserStoreState } from './user-store';

export interface State {
    todos: TodosStoreState.State;
    user: UserStoreState.State;
}
