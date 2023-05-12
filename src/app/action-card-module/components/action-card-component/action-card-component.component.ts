import { Component, Input, EventEmitter, Output } from '@angular/core';
import { ActionCardContentInterface } from './action-card-content-interface';

@Component({
  selector: 'app-action-card-component',
  templateUrl: './action-card-component.component.html',
  styleUrls: ['./action-card-component.component.scss'],
})
export class ActionCardComponentComponent {
  @Input() isDeletableAction!: boolean;
  @Input() title!: string;
  @Input() titleColor!: string;
  @Input() addActivityText!: string;
  @Input() deleteText!: string;
  @Input() cardContentRow: ActionCardContentInterface[] = [];
  @Output() btnEdit = new EventEmitter();
  @Output() btnAction = new EventEmitter();
  @Output() btnDelete = new EventEmitter()

  edit() {
    this.btnEdit.emit();
  }

  action() {
    this.btnAction.emit();
  }

  delete() {
    this.btnDelete.emit()
  }
}
