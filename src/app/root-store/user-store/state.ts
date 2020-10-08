import { User } from '@models/user.model';

export interface State {
    data: User | null;
    isLoading?: boolean;
    error?: any;
}

export const initialState: State = {
    data: null,
    isLoading: false,
    error: null,
};
