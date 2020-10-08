import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JsonplaceholderTodosResponse } from '@models/regres-todos-response.model';
import { Observable, of } from 'rxjs';
import { delay, map } from 'rxjs/operators';
import { Todo } from '../models/todo.model';
import { TODOS_DATA_MOCK } from './todos-data.mock';

@Injectable()
export class TodosDataService {
    private path = 'https://jsonplaceholder.typicode.com/todos';
    private count = 10;

    constructor(
        private http: HttpClient
    ) { }

    fetchMock(): Observable<Todo[]> {
        return of(TODOS_DATA_MOCK).pipe(
            delay(1000)
        );
    }

    fetch(): Observable<Todo[]> {
        return this.http
            .get<JsonplaceholderTodosResponse>(this.path)
            .pipe(
                delay(1000),
                map(response => response
                    .slice(0, this.count)
                    .map<Todo>(item => ({
                        id: item.id,
                        name: item.title,
                        completed: item.completed,
                    }))),
            );
    }
}
