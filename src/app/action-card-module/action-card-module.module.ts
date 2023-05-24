import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ActionCardComponentComponent } from './action-card-component/action-card-component.component';
import { ActionCardRowComponent } from './action-card-row/action-card-row.component';


@NgModule({
  declarations: [
    ActionCardComponentComponent,
    ActionCardRowComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ActionCardComponentComponent,
    ActionCardRowComponent,
  ],
})
export class ActionCardModuleModule { }
