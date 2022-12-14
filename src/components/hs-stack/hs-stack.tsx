import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'hs-stack',
  styleUrl: 'hs-stack.css',
  shadow: true,
})
export class HsStack {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
