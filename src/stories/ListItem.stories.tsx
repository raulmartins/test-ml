import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ListItem } from '@/components/ListItem';
import { Main } from '@/components/Main';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/ListItem',
  component: ListItem,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof ListItem>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ListItem> = (args) => (
  <Main>
    <ListItem {...args} />
  </Main>
);

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Default.args = {
  list: [
    {
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
    {
      id: '1233',
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
    {
      id: '125',
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
  ],
};
