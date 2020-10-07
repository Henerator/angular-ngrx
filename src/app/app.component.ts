import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Todo } from './models/todo.model';
import { RootStoreState, TodosActions, TodosSelectors } from './root-store';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
    todosItems$: Observable<Todo[]>;
    error$: Observable<string>;
    isLoading$: Observable<boolean>;

    constructor(
        private store$: Store<RootStoreState.State>
    ) { }

    ngOnInit(): void {
        this.todosItems$ = this.store$.select(
            TodosSelectors.selectTodosItems
        );
        this.error$ = this.store$.select(
            TodosSelectors.selectTodosError
        );
        this.isLoading$ = this.store$.select(
            TodosSelectors.selectTodosIsLoading
        );

        this.store$.dispatch(
            new TodosActions.LoadRequestAction()
        );
    }
}
