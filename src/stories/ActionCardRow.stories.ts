import {
    Meta,
    StoryObj,
    applicationConfig,
    componentWrapperDecorator,
    moduleMetadata,
  } from '@storybook/angular';
  import { ActionCardRowComponent } from 'src/app/action-card-module/components/action-card-row/action-card-row.component';
  
  const meta: Meta<ActionCardRowComponent> = {
    title: 'Project/ActionCardRow',
    component: ActionCardRowComponent,
    tags: [],
    render: (args: ActionCardRowComponent) => ({
      props: { ...args },
    }),
    //track events in that story: jei butu click
    argTypes: {
      toggleList: { action: 'list toggled' },
      onEdit: { action: 'edit clicked' },
      onAction: { action: 'action clicked' },
      closePopover: { action: 'popover closed' },
      onDelete: { action: 'delete clicked' },
    },
    decorators: [
      applicationConfig({
        providers: [],
      }),
      moduleMetadata({
        declarations: [ActionCardRowComponent],
      }),
      componentWrapperDecorator(
        (story) => `<div class="card" style="margin-top: 200px"> ${story} </div>`
      ),
    ],
  };
  
  export default meta;
  type Story = StoryObj<ActionCardRowComponent>;
  
  export const Row: Story = {
    args: {
      row: {
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
    },
  };
  