import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { delay, map } from 'rxjs/operators';
import { Todo } from '../models/todo.model';
import { RegresTodosResponse } from '../models/regres-todos-response.model';
import { TODOS_DATA_MOCK } from './todos-data.mock';

@Injectable()
export class TodosDataService {
    private path = 'https://reqres.in/api/todos/';

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
            .get<RegresTodosResponse>(this.path)
            .pipe(
                delay(1000),
                map(response => response.data.map<Todo>(item => ({
                    id: item.id,
                    name: item.name,
                })))
            );
    }
}
