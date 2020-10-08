import { ApiError } from '@models/api-error.model';
import { User } from '@models/user.model';

export interface State {
    data: User | null;
    isLoading?: boolean;
    error?: ApiError;
}

export const initialState: State = {
    data: null,
    isLoading: false,
    error: null,
};
