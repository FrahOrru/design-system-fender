/**
 * STORYBOOK TEMPLATE - Copy this file into your newly generated component folder, rename it
 * accordingly to match your component name and replace the `.template` suffix by '.ts' and then
 * populate the testing stories following the instructions below.
 */

export default {
  // This creates a ‘Components’ folder and a subfolder with the MyComponent menu item
  // of in Storybook's side menu. Replace 'MyComponent' by the generic component name.
  title: 'Components/Typography/Header',
  // Populate the `argTypes` property with knobs to customize the component.
  // Learn more about how to set up controls at https://storybook.js.org/docs/web-components/essentials/controls#annotation
  argTypes: {
    text: {
      description: 'Transcluded text to be injected in the component slot',
      defaultValue: 'Lorem ipsum dolor sit amet',
      control: { type: 'text' },
    },
    textAlign: {
      options: ['left', 'center', 'right'],
      control: { type: 'radio' },
      description: 'The header alignment',
    },
    level: {
      control: {
        type: 'number',
        min: 1,
        max: 5,
      },
      description: 'The header level (h1-h6)',
    },
  }
};

/**
 * Now you can create a reusable template for your component that you 
 * can later on customize with different values for its attribute properties and events
 */
const Template = (args) => `
  <hs-header level="${args.level}" text-align="${args.textAlign}">
    ${args.text}
  </hs-header>
`;

/**
 * Now you can leverage the template above to generate multiple snapshots of your component
 * with distinct combinations of property values and event handlers. 
 * Names must be PascalCased and Storybook will split names by capitals.
 * IMPORTANT: Remember to export each template binding and replace {@link ComponentStory} by
 * a proper 
 * Learn more about how to set up controls at https://storybook.js.org/docs/web-components/essentials/controls
 */
export const HeaderH1 = Template.bind({});
HeaderH1.args = {
  textAlign: 'left',
  level: 1,
};

export const HeaderH2 = Template.bind({});
HeaderH2.args = {
  textAlign: 'left',
  level: 2,
};

export const HeaderH3 = Template.bind({});
HeaderH3.args = {
  textAlign: 'left',
  level: 3,
};

export const HeaderH4 = Template.bind({});
HeaderH4.args = {
  textAlign: 'left',
  level: 4,
};

export const HeaderH5 = Template.bind({});
HeaderH5.args = {
  textAlign: 'left',
  level: 5,
};