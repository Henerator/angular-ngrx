import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodosStoreModule } from './todos-store/todos-store.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';



@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        TodosStoreModule,
        StoreModule.forRoot({}),
        EffectsModule.forRoot([]),
    ],
})
export class RootStoreModule { }
