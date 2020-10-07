import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { Todo } from '../models/todo.model';


const DATA_MOCK = [
    {
        id: '1',
        name: 'Name 1',
        date: new Date(),
        complete: false,
    },
    {
        id: '2',
        name: 'Name 2',
        date: new Date(),
        complete: false,
    },
];

@Injectable()
export class TodosDataService {
    fetch(): Observable<Todo[]> {
        return of(DATA_MOCK).pipe(
            delay(1000)
        );
    }
}
