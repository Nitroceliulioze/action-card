import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  edit(): void {
    console.log('edit');
  }
  delete(): void {
    console.log('delete');
  }
  action(): void {
    console.log('action');
  }
}
