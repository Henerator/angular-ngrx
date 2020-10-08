import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { UserDataService } from 'src/app/services/user-data.service';
import * as userActions from './actions';

@Injectable()
export class StoreEffects {
    constructor(
        private userDataService: UserDataService,
        private actions$: Actions,
    ) { }

    @Effect()
    loadUser$: Observable<Action> = this.actions$.pipe(
        ofType(userActions.loadUser),
        switchMap(action => {
            return this.userDataService
                .fetch(action.id)
                .pipe(
                    map(data => userActions.loadUserSuccess({ data })),
                    catchError(error => of(userActions.loadUserFailure({ error })))
                );
        })
    );
}
