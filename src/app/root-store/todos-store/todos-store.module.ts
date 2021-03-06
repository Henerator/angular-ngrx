import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { reducer, FEATURE_KEY } from './reducer';
import { TodosStoreEffects } from './effects';



@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        StoreModule.forFeature(FEATURE_KEY, reducer),
        EffectsModule.forFeature([TodosStoreEffects])
    ],
})
export class TodosStoreModule { }
