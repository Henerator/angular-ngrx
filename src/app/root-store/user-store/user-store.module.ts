import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { FEATURE_KEY, reducer } from './reducer';
import { EffectsModule } from '@ngrx/effects';
import { StoreEffects } from './effects';



@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        StoreModule.forFeature(FEATURE_KEY, reducer),
        EffectsModule.forFeature([StoreEffects])
    ],
})
export class UserStoreModule { }
