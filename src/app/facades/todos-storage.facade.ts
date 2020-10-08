import { Observable } from 'rxjs';
import { Todo } from '@models/todo.model';

export abstract class TodosStorageFacade {
    todosItems$: Observable<Todo[]>;
    error$: Observable<string>;
    isLoading$: Observable<boolean>;

    abstract loadTodos(): void;
}
