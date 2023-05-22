import { Component } from '@angular/core';
import { ActionCardContentInterface } from 'src/app/action-card-module/components/action-card-component/action-card-content-interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  deleteText: string = 'Delete?';
  cardContentRow: ActionCardContentInterface[] = [
    {
      cardRowTitle: 'Discover New Features',
      isDeletableAction: false,
      cardBadgeText: 'Must have item',
      cardActionPopoverHeader:
        'Do you want to delete this feature? First create another “must have tool”.',
      cardActionPopoverBody:
        'There must be at least one “Must have tool” in your list. If you wish to delete this feature, you first need to create another feature with the same badge.',
      cardRowListItems: [
        'Interactive Dashboard',
        'Smart Reminders & Notifications',
        'Data-driven Decision Making',
      ],
    },
    {
      cardRowTitle: 'Better Workflow',
      isDeletableAction: true,
      cardBadgeText: '',
      cardActionPopoverHeader: '',
      cardActionPopoverBody: '',
      cardRowListItems: [],
    },
    {
      cardRowTitle: 'Achieve Great Results',
      isDeletableAction: true,
      cardBadgeText: '',
      cardActionPopoverHeader: '',
      cardActionPopoverBody: '',
      cardRowListItems: [],
    },
  ];

  onEditCardRow(): void {
    console.log('edit');
  }
  onDeleteCardRow(): void {
    console.log('delete');
  }
  onActionCardRow(): void {
    console.log('action');
  }
}
