import { Component, h, Prop } from '@stencil/core';
import { css } from '@emotion/css';

@Component({
  tag: 'hs-help-text',
  styleUrl: 'hs-help-text.css',
  shadow: false,
  scoped: true
})
export class HsHelpText {

  @Prop()
  type: "success" | "warning" | "primary" | "error" = "primary";

  color;

  componentWillLoad() {
    switch(this.type) {
      case "success":
        this.color = `var()`
        break;
      case "warning":
        this.color = `var()`
        break;
      case "primary":
        this.color = `var()`
        break;
      case "error":
        this.color = `var()`
        break;  
      default: break;
    }
  }

  render() {
    const styleName = css`
    color: ${this.color}
    `
    
    return (
      <div class={styleName}>
        <slot></slot>
      </div>
    );
  }

}
