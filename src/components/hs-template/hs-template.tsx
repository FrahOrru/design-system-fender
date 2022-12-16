import { Component, h } from '@stencil/core';

@Component({
  tag: 'hs-template',
  styleUrl: 'hs-template.css',
  shadow: true,
})
export class HsTemplate {

  render() {
    return (
      <div>

        <hs-radio-group selected="1">
          <hs-flex direction='row' xAlign='stretch' gap={4}>
            <hs-radio-button value="1">Tab 1</hs-radio-button>
            <hs-radio-button value="2">Tab 2</hs-radio-button>
            <hs-radio-button value="3">Tab 3</hs-radio-button>
            <hs-radio-button value="4">Tab 4</hs-radio-button>
          </hs-flex>
        </hs-radio-group>

        <hs-header level={2}>Log In Page</hs-header>

        <hs-stack orientation='vertical'>
            <hs-text-input 
            type="primary"
            helpText={true}
            helpTextContent="Please insert a valid email"
            placeholder="Email"
            label="Email"></hs-text-input>

            <hs-text-input 
            type="primary"
            placeholder="Password"
            label="Password"></hs-text-input>
        </hs-stack>

        <hs-flex direction='row' yAlign='start' xAlign='center' gap={4}>
          <hs-button variant="text">Back</hs-button>
          <hs-button>Log in</hs-button>
        </hs-flex>
        <slot></slot>
      </div>
    );
  }

}
