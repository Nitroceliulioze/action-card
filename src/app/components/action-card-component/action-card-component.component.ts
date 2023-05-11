import { Component, Input } from '@angular/core';
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
  @Input() isLastItem!: boolean;
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
