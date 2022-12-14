import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'hs-breadcrumb-item',
  styleUrl: 'hs-breadcrumb-item.css',
  shadow: true,
})
export class HsBreadcrumbItem {

  @Prop({ reflect: true})
  src;

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
