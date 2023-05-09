import { Component, Input } from '@angular/core';
import { ActionCardContentInterface } from './action-card-content-interface';

@Component({
  selector: 'app-action-card-component',
  templateUrl: './action-card-component.component.html',
  styleUrls: ['./action-card-component.component.scss'],
})
export class ActionCardComponentComponent {
  isListOpen: boolean;
  showPopover: boolean;
  @Input() isDeletableAction!: boolean;
  @Input() title!: string;
  @Input() titleColor!: string;
  @Input() addActivityText!: string;
  @Input() deleteText!: string;
  @Input() cardContentRow: any;

  constructor() {
    this.isListOpen = false;
    this.showPopover = false;
  }

  closePopover():void {
    this.showPopover = false;
  }
  
  toggleList(): void {
    this.isListOpen = !this.isListOpen;
  }
}
