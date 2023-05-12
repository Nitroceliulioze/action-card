import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ActionCardComponentComponent } from './components/action-card-component/action-card-component.component';
import { ActionCardRowComponent } from './components/action-card-row/action-card-row.component';


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
