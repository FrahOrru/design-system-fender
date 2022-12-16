/**
 * STORYBOOK TEMPLATE - Copy this file into your newly generated component folder, rename it
 * accordingly to match your component name and replace the `.template` suffix by '.ts' and then
 * populate the testing stories following the instructions below.
 */

export default {
  // This creates a ‘Components’ folder and a subfolder with the MyComponent menu item
  // of in Storybook's side menu. Replace 'MyComponent' by the generic component name.
  title: 'Components/Layout/Flex',
  // Populate the `argTypes` property with knobs to customize the component.
  // Learn more about how to set up controls at https://storybook.js.org/docs/web-components/essentials/controls#annotation
  argTypes: {
    // This will create an `args.variant` binding for your component 
    direction: {
      options: ['row', 'column'],        // Value presets
      control: { type: 'select' },          // Knob type. It can be select, radio, etc
      description: 'Flex direction',    // The description text displayed in the knobs table
    },
    xAlign: {
      options: ["center", "start", "end", "stretch", "baseline" ],        // Value presets
      control: { type: 'select' },          // Knob type. It can be select, radio, etc
      description: 'alignment on x line',    // The description text displayed in the knobs table
    },
    yAlign: {
      options: ["center", "start", "end", "space-between", "space-around", "space-evenly"],        // Value presets
      control: { type: 'select' },          // Knob type. It can be select, radio, etc
      description: 'Flex direction',    // The description text displayed in the knobs table
    },
    gap: {
      control: { type: 'number' },          // Knob type. It can be select, radio, etc
      description: 'gap of one element to another',    // The description text displayed in the knobs table
    },
    wrap: {
      options: ["true", "false"],        // Value presets
      control: { type: 'boolean' },          // Knob type. It can be select, radio, etc
      description: 'gap of one element to another',    // The description text displayed in the knobs table
    },
  }
};

/**
 * Now you can create a reusable template for your component that you 
 * can later on customize with different values for its attribute properties and events
 */
const Template = (args) => `
  <hs-flex 
    direction="${args.direction}"
    xAlign="${args.xAlign}"
    yAlign="${args.yAlign}"
    gap="${args.gap}"
    wrap="${args.wrap}"
    >

    <hs-button>Button</hs-button>
    <hs-button>Button</hs-button>
    <hs-button>Button</hs-button>

  </hs-flex>
`;

/**
 * Now you can leverage the template above to generate multiple snapshots of your component
 * with distinct combinations of property values and event handlers. 
 * Names must be PascalCased and Storybook will split names by capitals.
 * IMPORTANT: Remember to export each template binding and replace {@link ComponentStory} by
 * a proper 
 * Learn more about how to set up controls at https://storybook.js.org/docs/web-components/essentials/controls
 */
export const Flex = Template.bind({});
Flex.args = {
  // Populate this object with key/value pairs, customizing the component atribute values or even its content. Eg:
  // content: 'Demo text',
  direction: 'row',
  xAlign: 'center',
  yAlign: 'space-around',
  gap: 2,
  wrap: false
};
