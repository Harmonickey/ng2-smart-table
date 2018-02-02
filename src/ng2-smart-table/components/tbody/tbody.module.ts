import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { Ng2SmartTableTbodyComponent } from './tbody.component';
import { TbodyCreateCancelComponent } from './cells/create-cancel.component';
import { TbodyEditDeleteComponent } from './cells/edit-delete.component';
import { TbodyCustomComponent } from './cells/custom.component';
import { CustomRowDetailsComponent } from '../row/custom-row-details.component';

import { CellModule } from '../cell/cell.module';

const TBODY_COMPONENTS = [
  TbodyCreateCancelComponent,
  TbodyEditDeleteComponent,
  TbodyCustomComponent,
  Ng2SmartTableTbodyComponent,
  CustomRowDetailsComponent
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    CellModule
  ],
  declarations: [
    ...TBODY_COMPONENTS
  ],
  exports: [
    ...TBODY_COMPONENTS,
  ],
})
export class TBodyModule { }
