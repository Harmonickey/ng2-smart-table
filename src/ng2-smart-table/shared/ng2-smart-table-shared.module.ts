import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Ng2SmartTableComponent } from '../ng2-smart-table.component';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        Ng2SmartTableComponent
    ],
    exports: [
        Ng2SmartTableComponent
    ]
})
export class Ng2SmartTableSharedModule { }