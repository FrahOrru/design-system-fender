/**
 * STORYBOOK TEMPLATE - Copy this file into your newly generated component folder, rename it
 * accordingly to match your component name and replace the `.template` suffix by '.ts' and then
 * populate the testing stories following the instructions below.
 */

export default {
  // This creates a ‘Components’ folder and a subfolder with the MyComponent menu item
  // of in Storybook's side menu. Replace 'MyComponent' by the generic component name.
  title: 'Components/Navigation/Tab Nav',
  // Populate the `argTypes` property with knobs to customize the component.
  // Learn more about how to set up controls at https://storybook.js.org/docs/web-components/essentials/controls#annotation
  argTypes: {
    // This will create an `args.variant` binding for your component 
    selected: {
      description: 'default selected element',    // The description text displayed in the knobs table
    },
    name: {
      description: 'actual name',    // The description text displayed in the knobs table
    },
  }
};

/**
 * Now you can create a reusable template for your component that you 
 * can later on customize with different values for its attribute properties and events
 */
const Template = (args) => `
<hs-radio-group selected="${args.selected}">
  <hs-flex direction='row' xAlign='stretch' gap={4}>
      <hs-radio-button value="1">Tab 1</hs-radio-button>
      <hs-radio-button value="2">Tab 2</hs-radio-button>
      <hs-radio-button value="3">Tab 3</hs-radio-button>
      <hs-radio-button value="4">Tab 4</hs-radio-button>
  </hs-flex>
</hs-radio-group>
`;

/**
 * Now you can leverage the template above to generate multiple snapshots of your component
 * with distinct combinations of property values and event handlers. 
 * Names must be PascalCased and Storybook will split names by capitals.
 * IMPORTANT: Remember to export each template binding and replace {@link ComponentStory} by
 * a proper 
 * Learn more about how to set up controls at https://storybook.js.org/docs/web-components/essentials/controls
 */
export const ComponentStory = Template.bind({});
ComponentStory.args = {
  // Populate this object with key/value pairs, customizing the component atribute values or even its content. Eg:
  // content: 'Demo text',
  selected: '1',
  name: 'tab nav'
};
