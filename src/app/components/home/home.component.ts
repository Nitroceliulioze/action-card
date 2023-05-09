import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  title: string = 'Card for Organizing Activities';
  titleColor: string = 'red'
  cardContentRow = [{
    title: 'Discover New Features',
    isDeletableAction: false,
    badge: 'Must have item',
    popoverHeader: 'Do you want to delete this feature? First create another “must have tool”.',
    popoverBody: 'There must be at least one “Must have tool” in your list. If you wish to delete this feature, you first need to create another feature with the same badge.',
    listItems: ['Interactive Dashboard', 'Smart Reminders & Notifications', 'Data-driven Decision Making']
  },
  {
    title: 'Better Workflow',
    isDeletableAction: true,
  },
  {
    title: 'Achieve Great Results',
    isDeletableAction: true,
  },
]
  
}
