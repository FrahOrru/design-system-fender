import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'hs-list',
  styleUrl: 'hs-list.css',
  shadow: true,
})
export class HsList {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
