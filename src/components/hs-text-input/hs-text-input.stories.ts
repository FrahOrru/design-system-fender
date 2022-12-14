/**
 * STORYBOOK TEMPLATE - Copy this file into your newly generated component folder, rename it
 * accordingly to match your component name and replace the `.template` suffix by '.ts' and then
 * populate the testing stories following the instructions below.
 */

export default {
  // This creates a ‘Components’ folder and a subfolder with the MyComponent menu item
  // of in Storybook's side menu. Replace 'MyComponent' by the generic component name.
  title: 'Components/Text Input',
  // Populate the `argTypes` property with knobs to customize the component.
  // Learn more about how to set up controls at https://storybook.js.org/docs/web-components/essentials/controls#annotation
  argTypes: {
    // This will create an `args.variant` binding for your component 
    type: {
      options: ["primary", "success", "warning", "error"],        // Value presets
      control: { type: 'select' },          // Knob type. It can be select, radio, etc
      description: 'The input type',    // The description text displayed in the knobs table
    },
    disabled: {
      options: ["true", "false"],        // Value presets
      control: { type: 'boolean' },          // Knob type. It can be select, radio, etc
      description: 'the input state',    // The description text displayed in the knobs table
    },
    helpText: {
      options: ["true", "false"],        // Value presets
      control: { type: 'boolean' },          // Knob type. It can be select, radio, etc
      description: 'define if the input provide an help text',    // The description text displayed in the knobs table
    },
    helpTextContent: {
      description: 'what is going to be shown in the help text',    // The description text displayed in the knobs table
      defaultValue: 'Help Text Content'
    },
    placeholder: {
      description: 'The input placeholder',    // The description text displayed in the knobs table
      defaultValue: 'Placeholder'
    },
    label: {
      description: 'the input label',    // The description text displayed in the knobs table
    },
  }
};

/**
 * Now you can create a reusable template for your component that you 
 * can later on customize with different values for its attribute properties and events
 */
const Template = (args) => `
  <hs-text-input
     type="${args.type}"
     help-text="${args.helpText}"
     help-text-content="${args.helpTextContent}"
     placeholder="${args.placeholder}"
     label="${args.label}"
     disabled="${args.disabled}"
     >
  </hs-text-input>
`;

/**
 * Now you can leverage the template above to generate multiple snapshots of your component
 * with distinct combinations of property values and event handlers. 
 * Names must be PascalCased and Storybook will split names by capitals.
 * IMPORTANT: Remember to export each template binding and replace {@link ComponentStory} by
 * a proper 
 * Learn more about how to set up controls at https://storybook.js.org/docs/web-components/essentials/controls
 */
export const PrimaryInput = Template.bind({});
PrimaryInput.args = {
  type:'primary',
  helpText: true,
  helpTextContent: "Please Insert a valid Email",
  placeholder: "Email",
  label: "Input label",
  disabled: false
};

export const SuccessInput = Template.bind({});
SuccessInput.args = {
  type:'success',
  helpText: true,
  helpTextContent: "Valid work email address.",
  placeholder: "Email",
  label: "Input label",
  disabled: false
};

export const WarningInput = Template.bind({});
WarningInput.args = {
  type:'warning',
  helpText: true,
  helpTextContent: "You have entered an external email. Use your work email address",
  placeholder: "Email",
  label: "Input label",
  disabled: false
};

export const ErrorInput = Template.bind({});
ErrorInput.args = {
  type:'error',
  helpText: true,
  helpTextContent: "Enter a valid email",
  placeholder: "Email",
  label: "Input label",
  disabled: false
};
