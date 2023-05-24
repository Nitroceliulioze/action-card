import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ActionCardContentInterface } from '../action-card-content-interface';

@Component({
  selector: 'app-action-card-row',
  templateUrl: './action-card-row.component.html',
  styleUrls: ['./action-card-row.component.scss'],
})
export class ActionCardRowComponent {
  @Input() deleteText!: string;
  @Input() row!: ActionCardContentInterface;
  @Input() isDeletableAction!: boolean;
  @Output() editCardRow = new EventEmitter();
  @Output() deleteCardRow = new EventEmitter();
  @Output() actionCardRow = new EventEmitter();
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

  onEdit(): void {
    this.editCardRow.emit();
  }

  onDelete(): void {
    this.deleteCardRow.emit();
  }

  onAction(): void {
    this.actionCardRow.emit();
  }
}
