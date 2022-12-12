import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'hs-grid-column',
  shadow: true,
})
export class HsGridColumn {

  render() {
    return (
      <Host class="hs-grid-column">
        <slot></slot>
      </Host>
    );
  }

}
