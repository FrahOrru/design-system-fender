import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'hs-box',
  styleUrl: 'hs-box.css',
  shadow: true,
})
export class HsBox {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
