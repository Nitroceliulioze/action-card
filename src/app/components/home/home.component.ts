import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  edit() {
    console.log('edit');
  }
  delete() {
    console.log('delete');
  }
  action() {
    console.log('action');
  }
}
