import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { TodosDataService } from 'src/app/services/todos-data.service';
import * as todosActions from './actions';

@Injectable()
export class TodosStoreEffects {
    constructor(
        private todosDataService: TodosDataService,
        private actions$: Actions,
    ) { }

    @Effect()
    todosRequestEffect$: Observable<Action> = this.actions$.pipe(
        ofType(todosActions.loadRequest),
        switchMap(() => {
            return this.todosDataService
                .fetch()
                .pipe(
                    map(items => todosActions.loadSuccess({ items })),
                    catchError(error => of(todosActions.loadFailure({ error })))
                );
        })
    );
}
