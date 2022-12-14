import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'hs-icons',
  styleUrl: 'hs-icons.css',
  shadow: true,
})
export class HsIcons {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
