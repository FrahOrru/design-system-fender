/**
 * STORYBOOK TEMPLATE - Copy this file into your newly generated component folder, rename it
 * accordingly to match your component name and replace the `.template` suffix by '.ts' and then
 * populate the testing stories following the instructions below.
 */

export default {
  // This creates a ‘Components’ folder and a subfolder with the MyComponent menu item
  // of in Storybook's side menu. Replace 'MyComponent' by the generic component name.
  title: 'Components/Text Content/List',
  // Populate the `argTypes` property with knobs to customize the component.
  // Learn more about how to set up controls at https://storybook.js.org/docs/web-components/essentials/controls#annotation
  argTypes: {
    // This will create an `args.variant` binding for your component 
    type: {
      options: ['unordered', 'ordered'],        // Value presets
      control: { type: 'select' },          // Knob type. It can be select, radio, etc
      description: 'List Type',    // The description text displayed in the knobs table
      defaultValue: 'unordered'
    },
  }
};

/**
 * Now you can create a reusable template for your component that you 
 * can later on customize with different values for its attribute properties and events
 */
const Template = (args) => `
  <hs-list type="${args.type}">
    <li>Prova</li>
    <li>Prova</li>
    <li>Prova</li>
  </hs-list>
`;

/**
 * Now you can leverage the template above to generate multiple snapshots of your component
 * with distinct combinations of property values and event handlers. 
 * Names must be PascalCased and Storybook will split names by capitals.
 * IMPORTANT: Remember to export each template binding and replace {@link ComponentStory} by
 * a proper 
 * Learn more about how to set up controls at https://storybook.js.org/docs/web-components/essentials/controls
 */
export const UnorderedList = Template.bind({});
UnorderedList.args = {
  // Populate this object with key/value pairs, customizing the component atribute values or even its content. Eg:
  // content: 'Demo text',
  type: 'unordered'
};

export const OrderedList = Template.bind({});
OrderedList.args = {
  // Populate this object with key/value pairs, customizing the component atribute values or even its content. Eg:
  // content: 'Demo text',
  type: 'ordered'
};