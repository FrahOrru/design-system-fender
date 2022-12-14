import { Component, h, Prop } from '@stencil/core';
import { css } from '@emotion/css';

@Component({
  tag: 'hs-stack',
  styleUrl: 'hs-stack.css',
  shadow: true,
})
export class HsStack {

  @Prop({reflect: true})
  orientation: "vertical" | "horizontal" = "horizontal";

  @Prop({reflect: true})
  gap: 'large' | 'small' = 'small';

  render() {
    const stackStyle = css`
    gap: ${ this.gap === 'large' ? 30 : 10}px;
    flex-direction: ${this.orientation === 'horizontal' ? 'row' : 'column'};
  `;

    return (
      <div class={stackStyle}>
        <slot></slot>
      </div>
    );
  }

}
