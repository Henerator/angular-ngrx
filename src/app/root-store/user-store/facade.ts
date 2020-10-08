import { Injectable } from '@angular/core';
import { UserStorageFacade } from '@facades/user-storage.facade';
import { Store } from '@ngrx/store';
import { State } from './state';
import * as UserActions from './actions';
import * as UserSelectors from './selectors';


@Injectable()
export class UserStore extends UserStorageFacade {
    data$ = this.store$.select(UserSelectors.selectUser);
    error$ = this.store$.select(UserSelectors.selectUserError);
    isLoading$ = this.store$.select(UserSelectors.selectUserIsLoading);

    constructor(
        private store$: Store<State>
    ) {
        super();
    }

    loadUser(id: number): void {
        this.store$.dispatch(UserActions.loadUser({ id }));
    }
}
