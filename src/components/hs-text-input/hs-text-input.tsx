import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'hs-text-input',
  styleUrl: 'hs-text-input.css',
  shadow: true,
})
export class HsTextInput {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
