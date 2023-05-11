import { Component, Input } from '@angular/core';
import { ActionCardContentInterface } from '../action-card-component/action-card-content-interface';

@Component({
  selector: 'app-action-card-row',
  templateUrl: './action-card-row.component.html',
  styleUrls: ['./action-card-row.component.scss'],
})
export class ActionCardRowComponent {
  @Input() deleteText!: string;
  @Input() row!: ActionCardContentInterface;
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
}
