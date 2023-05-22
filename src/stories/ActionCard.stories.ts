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
        componentWrapperDecorator((story)=> `<div class="card"> ${story} </div>`),
    ],
};

export default meta;
type Story = StoryObj<ActionCardComponentComponent>;

export const Primary: Story = {
    args: {
        title: "Title",
        addActivityText: "Add activity"
    }
}

export const NoTitle: Story = {
    args: {
        
        addActivityText: "Add activity"
    }
}