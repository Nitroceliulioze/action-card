import {
  Meta,
  StoryObj,
  applicationConfig,
  componentWrapperDecorator,
  moduleMetadata,
} from '@storybook/angular';
import { ActionCardComponentComponent } from 'src/app/action-card-module/action-card-component/action-card-component.component';
import { ActionCardRowComponent } from 'src/app/action-card-module/action-card-row/action-card-row.component';
import { HomeComponent } from 'src/app/components/home/home.component';

const meta: Meta<HomeComponent> = {
  title: 'Project/ActionCardComponent',
  component: HomeComponent,
  tags: [],
  render: (args: HomeComponent) => ({
    props: { ...args },
  }),
  argTypes: {},
  decorators: [
    applicationConfig({
      providers: [],
    }),
    moduleMetadata({
      declarations: [ActionCardComponentComponent, ActionCardRowComponent],
    }),
    componentWrapperDecorator(
      (story) =>
        `<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css"> <div> ${story} </div>`
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
        cardRowListItems: [],
      },
      {
        cardRowTitle: 'Achieve Great Results',
        isDeletableAction: true,
        cardBadgeText: '',
        cardActionPopoverHeader: '',
        cardActionPopoverBody: '',
        cardRowListItems: ['Interactive Dashboard'],
      },
    ],
  },
};
