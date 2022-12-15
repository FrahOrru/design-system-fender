import { Component, h, Prop } from '@stencil/core';
import { css } from '@emotion/css';

@Component({
  tag: 'hs-flex',
  styleUrl: 'hs-flex.css',
  shadow: false,
  scoped: true
})
export class HsFlex {

  @Prop({ reflect: true })
  direction: "row" | "column" = "row";

  @Prop({ reflect: true, attribute: 'xAlign' })
  xAlign: "center" | "start" | "end" | "stretch" | "baseline" = "center";

  @Prop({ reflect: true, attribute: 'yAlign'})
  yAlign: "center" | "start" | "end"| "space-between" | "space-around" | "space-evenly" = "center";

  @Prop({ reflect: true })
  gap: number = 0;

  @Prop({ reflect: true })
  wrap: boolean = false;
  
  render() {
    const styles = css`
    display: flex;
    flex-direction: ${this.direction};
    justify-content: ${this.yAlign};
    align-items: ${this.xAlign};
    gap: ${this.gap}rem;
    wrap: ${this.wrap ? 'wrap' : 'no-wrap'}
  `;

    return (
      <div class={styles}>
        <slot></slot>
      </div>
    );
  }

}
