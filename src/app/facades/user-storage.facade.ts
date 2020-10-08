import { User } from '@models/user.model';
import { Observable } from 'rxjs';

export abstract class UserStorageFacade {
    abstract data$: Observable<User>;
    abstract error$: Observable<string>;
    abstract isLoading$: Observable<boolean>;

    abstract loadUser(id: number): void;
}
