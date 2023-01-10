import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Card } from '@/components/Card';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Card',
  component: Card,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof Card>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  item: {
    id: '123',
    title: 'card title',
    picture: 'http://http2.mlstatic.com/D_799193-MLA53141288348_012023-I.jpg',
    condition: 'condition',
    free_shipping: true,
    category: ['categoria1', 'categoria2', 'categoria3'],
    city: 'capital do ceará',
    price: {
      currency: '$',
      amount: 1,
      decimal: 2,
    },
  },
};
