import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'hs-callout',
  styleUrl: 'hs-callout.css',
  shadow: false,
  scoped: true
})
export class HsCallout {

  @Prop({reflect: true})
  type: "info" | "warning" | "success" = "info";

  icon;

  icons = [
    "https://img.icons8.com/material-outlined/24/ffffff/info--v1.png",
    "https://img.icons8.com/material-outlined/24/ffffff/error--v1.png",
    "https://img.icons8.com/material-outlined/24/02bc37/ok--v1.png"
  ]

  componentWillLoad() {
    switch(this.type) {
      case "success":
        this.icon = this.icons[2];
        break;
      case "warning":
        this.icon = this.icons[1];
        break;
      case "info":
        this.icon = this.icons[0];
        break;  
      default: break;
    }
  }
  render() {
    return (
      <div class={`${this.type}`}>
        <hs-flex xAlign='center' yAlign='start' gap={2}>
          <img src={this.icon} /> 
          <slot></slot>
        </hs-flex>
      </div>
    );
  }

}
