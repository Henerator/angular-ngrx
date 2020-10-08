import { Observable } from 'rxjs';
import { Todo } from '@models/todo.model';
import { ApiError } from '@models/api-error.model';

export abstract class TodosStorageFacade {
    todosItems$: Observable<Todo[]>;
    error$: Observable<ApiError>;
    isLoading$: Observable<boolean>;

    abstract loadTodos(): void;
}
