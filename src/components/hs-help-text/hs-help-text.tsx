import { Component, h, Prop } from '@stencil/core';
import { css } from '@emotion/css';
import * as JsVariables from '../../design-tokens/js/variables';

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
  icon;

  icons = [
    "https://img.icons8.com/material-outlined/24/F81605/high-priority.png",
    "https://img.icons8.com/material-outlined/24/ffc107/error--v1.png",
    "https://img.icons8.com/material-outlined/24/02bc37/ok--v1.png"
  ]

  componentWillLoad() {
    switch(this.type) {
      case "success":
        this.icon = this.icons[2];
        this.color = JsVariables.ColorFoundationSuccessNormal
        break;
      case "warning":
        this.icon = this.icons[1];
        this.color = JsVariables.ColorFoundationWarningNormal
        break;
      case "primary":
        this.color = JsVariables.ColorFoundationTypeDisabled
        break;
      case "error":
        this.icon = this.icons[0];
        this.color = JsVariables.ColorFoundationPrimaryRedNormal
        break;  
      default: break;
    }
  }

  render() {
    const styleName = css`
    color: ${this.color};
    font-size: ${JsVariables.FontSize20.fontSize}px;
    `;

    return (
      <div class={styleName}>
        {
          this.type !== "primary" ? 
          <img src={this.icon} /> :
          null
        }
        <slot></slot>
      </div>
    );
  }

}
