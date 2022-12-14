import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'hs-breadcrumb',
  styleUrl: 'hs-breadcrumb.css',
  shadow: true,
})
export class HsBreadcrumb {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
