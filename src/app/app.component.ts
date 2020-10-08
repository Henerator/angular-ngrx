import { Component, OnInit } from '@angular/core';
import { TodosStorageFacade } from '@facades/todos-storage.facade';
import { UserStorageFacade } from '@facades/user-storage.facade';
import { TodosStore, UserStore } from './root-store';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    providers: [
        {
            provide: TodosStorageFacade,
            useClass: TodosStore,
        },
        {
            provide: UserStorageFacade,
            useClass: UserStore,
        },
    ],
})
export class AppComponent implements OnInit {
    todosItems$ = this.todosFacade.todosItems$;
    todosError$ = this.todosFacade.error$;
    todosIsLoading$ = this.todosFacade.isLoading$;

    userData$ = this.userFacade.data$;
    userError$ = this.userFacade.error$;
    userIsLoading$ = this.userFacade.isLoading$;

    constructor(
        private todosFacade: TodosStorageFacade,
        private userFacade: UserStorageFacade,
    ) {
    }

    ngOnInit(): void {
        this.todosFacade.loadTodos();
        this.userFacade.loadUser(1);
    }
}
