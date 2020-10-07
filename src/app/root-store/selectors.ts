import { createSelector, MemoizedSelector } from '@ngrx/store';
import { TodosSelectors } from './todos-store';

export const selectIsLoading: MemoizedSelector<
    object,
    boolean
> = createSelector(
    TodosSelectors.selectTodosIsLoading,
    (todosIsLoading: boolean) => todosIsLoading
);
