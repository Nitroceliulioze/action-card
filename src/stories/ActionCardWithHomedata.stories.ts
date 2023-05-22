import {
  Meta,
  StoryObj,
  applicationConfig,
  componentWrapperDecorator,
  moduleMetadata,
} from '@storybook/angular';
import { ActionCardComponentComponent } from 'src/app/action-card-module/components/action-card-component/action-card-component.component';
import { ActionCardRowComponent } from 'src/app/action-card-module/components/action-card-row/action-card-row.component';
import { HomeComponent } from 'src/app/components/home/home.component';

const meta: Meta<HomeComponent> = {
  title: 'Project/ActionCardComponent',
  component: HomeComponent,
  tags: [],
  render: (args: HomeComponent) => ({
    props: { ...args },
  }),
  //track events in that story: jei butu click
  argTypes: {
    onEditCardRow: { action: 'editCardRow' },
    onActionCardRow: { action: 'actionCardRow' },
    onDeleteCardRow: { action: 'deleteCardRow' },

    // toggleList: { action: toggleList() },
    // onEdit: { action: onEdit() },
    // onAction: { action: onAction() },
    // closePopover: { action: closePopover() },
    // onDelete: { action: onDelete() }
  },
  decorators: [
    applicationConfig({
      providers: [],
    }),
    moduleMetadata({
      declarations: [ActionCardComponentComponent, ActionCardRowComponent],
    }),
    componentWrapperDecorator(
      (story) =>
        `<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css"> <div style="font-family:'Exo', sans-serif"> ${story}</div>`
    ),
  ],
};

export default meta;
type Story = StoryObj<HomeComponent>;

export const ActionCardWithAllData: Story = {
  args: {
    deleteText: 'Delete?',
    cardContentRow: [
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
        cardRowListItems: [
          'Interactive Dashboard',
          'Smart Reminders & Notifications',
          'Data-driven Decision Making',
        ],
      },
      {
        cardRowTitle: 'Achieve Great Results',
        isDeletableAction: true,
        cardBadgeText: '',
        cardActionPopoverHeader: '',
        cardActionPopoverBody: '',
        cardRowListItems: [
          'Interactive Dashboard',
          'Smart Reminders & Notifications',
          'Data-driven Decision Making',
        ],
      },
    ], 
    onEditCardRow: () => console.log('Edit Card Row'),
    onActionCardRow: () => console.log('Action Card Row'),
    onDeleteCardRow: () => console.log('Delete Card Row'),
 
}
}