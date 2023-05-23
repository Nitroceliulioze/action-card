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
      toggleList: { action: 'toggleList' },
      onEdit: { action: 'onEdit' },
      onAction: { action: 'onAction' },
      closePopover: { action: 'closePopover' },
      onDelete: { action: 'onDelete' },
    },
    decorators: [
      applicationConfig({
        providers: [],
      }),
      moduleMetadata({
        declarations: [ActionCardRowComponent],
      }),
      componentWrapperDecorator(
        (story) => `<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css"><div class="card-body" style="margin-top: 150px"> ${story} </div>`
      ),
    ],
  };
  
  export default meta;
  type Story = StoryObj<ActionCardRowComponent>;

  export const actionsData = {
    toggleList: () => console.log('Toggle List called'),
    onEdit: () => console.log('Edit called'),
    onAction: () => console.log('Action called'),
    closePopover: () => console.log('Popover closed'),
    onDelete: () => console.log('Delete called'),
  };

  export const RowWithBadge: Story = {
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
      deleteText: 'Delete?',
      toggleList: actionsData.toggleList,
      onEdit: actionsData.onEdit,
      onAction: actionsData.onAction,
      closePopover: actionsData.closePopover,
      onDelete: actionsData.onDelete,
    },
  };

  export const DeletableRow: Story = {
    args: {
      row: {
        cardRowTitle: 'Discover New Features',
        isDeletableAction: true,
        cardRowListItems: [
          'Interactive Dashboard',
          'Smart Reminders & Notifications',
          'Data-driven Decision Making',
        ],
      },
      toggleList: actionsData.toggleList,
      onEdit: actionsData.onEdit,
      onAction: actionsData.onAction,
      closePopover: actionsData.closePopover,
      onDelete: actionsData.onDelete,
    },
    
  };

 
  
  RowWithBadge.parameters = {
    actions: actionsData,
  };
  
  DeletableRow.parameters = {
    actions: actionsData,
  };


