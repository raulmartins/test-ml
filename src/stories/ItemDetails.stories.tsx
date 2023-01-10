import { ComponentStory, ComponentMeta } from '@storybook/react';
import Image from './assets/logo-v2.png';
import { ItemDetails } from '@/components/ItemDetails';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Item Details',
  component: ItemDetails,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof ItemDetails>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ItemDetails> = (args) => (
  <ItemDetails {...args} />
);

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  itemDetails: {
    id: '123',
    title: 'card title',
    picture: `/#`,
    condition: 'condition',
    free_shipping: true,
    sold_quantity: 12231,
    description:
      'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.',
    category: ['categoria1', 'categoria2', 'categoria3'],
    price: {
      currency: '$',
      amount: 1,
      decimal: 2,
    },
  },
};
