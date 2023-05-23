import { Meta, StoryObj, applicationConfig, componentWrapperDecorator, moduleMetadata } from "@storybook/angular";
import { ActionCardComponentComponent } from "src/app/action-card-module/components/action-card-component/action-card-component.component";
import { ActionCardRowComponent } from "src/app/action-card-module/components/action-card-row/action-card-row.component";

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
            declarations: [ ActionCardComponentComponent, ActionCardRowComponent ],
        }),
        componentWrapperDecorator((story)=> `<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css"> <div> ${story } </div>`),
    ],
};

export default meta;
type Story = StoryObj<ActionCardComponentComponent>;

export const ActionCardTitleRow: Story = {
    args: {
        title: "Card for Organizing Activities",
        addActivityText: "Add activity",
        titleColor: 'red'
    }
}


