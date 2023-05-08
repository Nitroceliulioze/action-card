import { Component } from '@angular/core';

@Component({
  selector: 'app-action-card-component',
  templateUrl: './action-card-component.component.html',
  styleUrls: ['./action-card-component.component.scss']
})
export class ActionCardComponentComponent {
  isListOpen: boolean = false;

  toggleList() {
    this.isListOpen = !this.isListOpen
  }
}
