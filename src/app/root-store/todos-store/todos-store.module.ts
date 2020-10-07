import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { todosFeatureKey, todosReducer } from './reducer';
import { EffectsModule } from '@ngrx/effects';
import { TodosStoreEffects } from './effects';



@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        StoreModule.forFeature(todosFeatureKey, todosReducer),
        EffectsModule.forFeature([TodosStoreEffects])
    ],
    providers: [
        TodosStoreEffects,
    ],
})
export class TodosStoreModule { }
