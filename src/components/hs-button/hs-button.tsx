import { Component, h, Prop, Event } from '@stencil/core';

@Component({
  tag: 'hs-button',
  styleUrl: 'hs-button.css',
  shadow: false, // Disable Shadow DOM to benefit from global styles defined in Design Tokens
  scoped: true
})
export class HsButton {

  @Prop()
  variant: "primary" | "payment" | "pill" | "text" = "primary";

  @Prop()
  size = "medium";

  @Prop({ reflect: true})
  disabled: boolean = false;

  @Event({})
  clicked;

  clickHandler(e) {
    this.clicked.emit(e);
  }

  render() {
    return (
      <button class={`${this.variant} ${this.size} ${this.disabled ? 'disabled' : null}`} onClick={(e) => this.clickHandler(e)}>
        { 
          this.variant === "payment" ? 
          <img src="https://img.icons8.com/material-outlined/24/ffffff/lock--v1.png"/> :
          null
        }
        <slot></slot>
      </button>
    );
  }

}
