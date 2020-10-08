import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { TodosStorageFacade } from '@facades/todos-storage.facade';
import { State } from './state';
import * as TodosActions from './actions';
import * as TodosSelectors from './selectors';


@Injectable()
export class TodosStore extends TodosStorageFacade {
    todosItems$ = this.store$.select(TodosSelectors.selectTodosItems);
    error$ = this.store$.select(TodosSelectors.selectTodosError);
    isLoading$ = this.store$.select(TodosSelectors.selectTodosIsLoading);

    constructor(
        private store$: Store<State>
    ) {
        super();
    }

    loadTodos(): void {
        this.store$.dispatch(TodosActions.loadItems());
    }
}
