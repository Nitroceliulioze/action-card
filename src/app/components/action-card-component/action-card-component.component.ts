import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-action-card-component',
  templateUrl: './action-card-component.component.html',
  styleUrls: ['./action-card-component.component.scss'],
})
export class ActionCardComponentComponent {
  isListOpen: boolean = false;
  @Input() titleColor!: string;
  //  @Input() rowData Array of objects needs interface
  @Input() badge!: string;
  @Input() addActivityText!: string;
  @Input() deleteText!: string;

  toggleList() {
    this.isListOpen = !this.isListOpen;
  }
}
