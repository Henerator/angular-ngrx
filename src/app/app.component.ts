import { Component, OnInit } from '@angular/core';
import { TodosStorageFacade } from '@facades/todos-storage.facade';
import { TodosStore } from './root-store';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    providers: [{
        provide: TodosStorageFacade,
        useClass: TodosStore,
    }]
})
export class AppComponent implements OnInit {
    todosItems$ = this.todosFacade.todosItems$;
    error$ = this.todosFacade.error$;
    isLoading$ = this.todosFacade.isLoading$;

    constructor(
        private todosFacade: TodosStorageFacade
    ) { }

    ngOnInit(): void {
        this.todosFacade.loadTodos();
    }
}
