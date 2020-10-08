import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { todosReducer, TODOS_FEATURE_KEY } from './reducer';
import { EffectsModule } from '@ngrx/effects';
import { TodosStoreEffects } from './effects';



@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        StoreModule.forFeature(TODOS_FEATURE_KEY, todosReducer),
        EffectsModule.forFeature([TodosStoreEffects])
    ],
    providers: [
        TodosStoreEffects,
    ],
})
export class TodosStoreModule { }
