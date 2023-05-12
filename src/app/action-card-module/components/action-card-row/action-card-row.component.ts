import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ActionCardContentInterface } from '../action-card-component/action-card-content-interface';

@Component({
  selector: 'app-action-card-row',
  templateUrl: './action-card-row.component.html',
  styleUrls: ['./action-card-row.component.scss'],
})
export class ActionCardRowComponent {
  @Input() deleteText!: string;
  @Input() row!: ActionCardContentInterface;
  @Output() btnEdit = new EventEmitter();
  @Output() btnDelete = new EventEmitter();
  @Output() btnAction = new EventEmitter();
  isListOpen: boolean;
  showPopover: boolean;

  constructor() {
    this.isListOpen = false;
    this.showPopover = false;
  }

  closePopover(): void {
    this.showPopover = false;
  }

  toggleList(): void {
    this.isListOpen = !this.isListOpen;
  }

  onEdit() {
    this.btnEdit.emit();
  }

  onDelete() {
    this.btnDelete.emit();
  }

  onAction() {
    this.btnAction.emit();
  }
}
