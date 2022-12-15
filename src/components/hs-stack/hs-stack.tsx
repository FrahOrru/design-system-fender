import { Component, h, Prop } from '@stencil/core';
import { css } from '@emotion/css';

@Component({
  tag: 'hs-stack',
  styleUrl: 'hs-stack.css',
  shadow: false,
  scoped: true
})
export class HsStack {

  @Prop({reflect: true})
  orientation: "vertical" | "horizontal" = "horizontal";

  @Prop({reflect: true})
  gap: number = 0;

  
  componentWillLoad() {
    console.log(this.orientation)
  }

  stackStyle = css`
    flex-direction: ${this.orientation === 'horizontal' ? 'row' : 'column'};
    gap: ${ this.gap}rem;
  `;

  render() {
    return (
      <div class={this.stackStyle}>
        <slot></slot>
      </div>
    );
  }

}
