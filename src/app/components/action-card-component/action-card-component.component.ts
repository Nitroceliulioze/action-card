import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-action-card-component',
  templateUrl: './action-card-component.component.html',
  styleUrls: ['./action-card-component.component.scss'],
})
export class ActionCardComponentComponent {
  isListOpen: boolean ;
  showPopover: boolean;
  @Input() titleColor!: string;
  //  @Input() rowData Array of objects needs interface
  @Input() badge!: string;
  @Input() addActivityText!: string;
  @Input() deleteText!: string;

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
