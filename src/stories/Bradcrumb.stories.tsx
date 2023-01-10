import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Breadcrumb } from '@/components/Breadcrumb';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Breadcrumb',
  component: Breadcrumb,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof Breadcrumb>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Breadcrumb> = (args) => (
  <Breadcrumb {...args} />
);

export const Default = Template.bind({});

Default.args = {
  categories: ['carro', 'mitsubish', 'caminhonete'],
};
