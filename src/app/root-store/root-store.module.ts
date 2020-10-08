import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { UserStoreModule } from './user-store';
import { TodosStoreModule } from './todos-store';



@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        TodosStoreModule,
        UserStoreModule,
        StoreModule.forRoot({}),
        EffectsModule.forRoot([]),
    ],
})
export class RootStoreModule { }
