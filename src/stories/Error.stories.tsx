import { ComponentStory, ComponentMeta } from '@storybook/react';
import Image from '../../public/images/lupav2.png';
import { Error } from '@/components/Error';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Error',
  component: Error,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof Error>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Error> = (args) => <Error {...args} />;

export const Default = Template.bind({});

// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  image: Image,
};
