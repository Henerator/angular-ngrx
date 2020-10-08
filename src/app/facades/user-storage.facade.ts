import { ApiError } from '@models/api-error.model';
import { User } from '@models/user.model';
import { Observable } from 'rxjs';

export abstract class UserStorageFacade {
    abstract data$: Observable<User>;
    abstract error$: Observable<ApiError>;
    abstract isLoading$: Observable<boolean>;

    abstract loadUser(id: number): void;
}
