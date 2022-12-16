/**
 * STORYBOOK TEMPLATE - Copy this file into your newly generated component folder, rename it
 * accordingly to match your component name and replace the `.template` suffix by '.ts' and then
 * populate the testing stories following the instructions below.
 */

export default {
  // This creates a ‘Components’ folder and a subfolder with the MyComponent menu item
  // of in Storybook's side menu. Replace 'MyComponent' by the generic component name.
  title: 'Components/Card',
  // Populate the `argTypes` property with knobs to customize the component.
  // Learn more about how to set up controls at https://storybook.js.org/docs/web-components/essentials/controls#annotation
  argTypes: {
    // This will create an `args.variant` binding for your component 
    type: {
      options: ["medium", "small"],        // Value presets
      control: { type: 'select' },          // Knob type. It can be select, radio, etc
      description: 'Card Type',    // The description text displayed in the knobs table
    },
    image: {
      description: 'Card background image',    // The description text displayed in the knobs table
    },
    header: {
      description: 'Card Header text',    // The description text displayed in the knobs table
    },
    content: {
      description: 'Card content text',    // The description text displayed in the knobs table
    },
  }
};

/**
 * Now you can create a reusable template for your component that you 
 * can later on customize with different values for its attribute properties and events
 */
const Template = (args) => `
  <hs-card
    type="${args.type}"
    image="${args.image}"
    header="${args.header}"
    content="${args.content}"
  ></hs-card>
`;

/**
 * Now you can leverage the template above to generate multiple snapshots of your component
 * with distinct combinations of property values and event handlers. 
 * Names must be PascalCased and Storybook will split names by capitals.
 * IMPORTANT: Remember to export each template binding and replace {@link ComponentStory} by
 * a proper 
 * Learn more about how to set up controls at https://storybook.js.org/docs/web-components/essentials/controls
 */

export const MediumCard = Template.bind({});
MediumCard.args = {
  // Populate this object with key/value pairs, customizing the component atribute values or even its content. Eg:
  // content: 'Demo text',
  type: 'medium',
  image: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
  header: 'Card Header',
  content: 'Card Content',
};

export const SmallCard = Template.bind({});
SmallCard.args = {
  // Populate this object with key/value pairs, customizing the component atribute values or even its content. Eg:
  // content: 'Demo text',
  type: 'small',
  image: 'https://images.pexels.com/photos/92069/pexels-photo-92069.jpeg',
  header: 'Card Header',
  content: '$ 9.50',
};