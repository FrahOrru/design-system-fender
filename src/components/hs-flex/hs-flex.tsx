import { Component, Host, h, Prop } from '@stencil/core';
import { css } from '@emotion/css';

@Component({
  tag: 'hs-flex',
  styleUrl: 'hs-flex.css',
  shadow: true,
})
export class HsFlex {

  @Prop({ reflect: true })
  direction: "row" | "column" = "row";

  @Prop({ reflect: true })
  xAlign: "center" | "start" | "end" = "center";

  @Prop({ reflect: true })
  yAlign: "center" | "start" | "end"| "space-between" | "space-around" | "space-evenly" = "center";

  @Prop({ reflect: true })
  gap: number = 0;

  @Prop({ reflect: true })
  wrap: boolean;

  render() {
    const styles = css`
    display: flex;
    flex-direction: ${this.direction};
    justify-content: ${this.yAlign};
    align-items: ${this.xAlign};
    gap: ${this.gap}rem;
  `;

    return (
      <Host className={styles}>
        <slot></slot>
      </Host>
    );
  }

}
