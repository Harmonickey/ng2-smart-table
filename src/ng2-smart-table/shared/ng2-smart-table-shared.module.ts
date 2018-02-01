import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Ng2SmartTableComponent } from '../ng2-smart-table.component';
import { CellModule } from '../components/cell/cell.module';
import { FilterModule } from '../components/filter/filter.module';
import { PagerModule } from '../components/pager/pager.module';
import { TBodyModule } from '../components/tbody/tbody.module';
import { THeadModule } from '../components/thead/thead.module';

@NgModule({
    imports: [
        CommonModule,
        CellModule,
        FilterModule,
        PagerModule,
        TBodyModule,
        THeadModule,
    ],
    declarations: [
        Ng2SmartTableComponent
    ],
    exports: [
        Ng2SmartTableComponent
    ]
})
export class Ng2SmartTableSharedModule { }