import { Meta, StoryObj, applicationConfig, componentWrapperDecorator, moduleMetadata } from "@storybook/angular";
import { ActionCardComponentComponent } from "src/app/action-card-module/components/action-card-component/action-card-component.component";

const meta: Meta<ActionCardComponentComponent> = {
    title: 'Project/ActionCardComponent',
    component: ActionCardComponentComponent,
    tags: [],
    render: (args: ActionCardComponentComponent) => ({
        props: { ...args },
    }),
    //track events in that story: jei butu click
    argTypes: { },
    decorators: [
        applicationConfig({
            providers: []
        }),
        moduleMetadata({
            declarations: [ ActionCardComponentComponent ],
        }),
        componentWrapperDecorator((story)=> `<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css"> <div> ${story}</div>`),
    ],
};

export default meta;
type Story = StoryObj<ActionCardComponentComponent>;

export const ActionCartTitleRow: Story = {
    args: {
        title: "Card for Organizing Activities",
        addActivityText: "Add activity",
        titleColor: 'red',
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
              cardRowListItems: [],
            },
          ]
    }
}
