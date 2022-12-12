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
  yAlign: "center" | "start" | "end" = "center";

  @Prop({ reflect: true })
  spacing: "between" | "around" | "evenly" | number = 1;

  justify;

  componentWillLoad() {
    if(this.direction === "row") {
      //justify-content based on yAlign
      switch(this.spacing) {
        case "between":
          this.justify = "space-between";
          break;
        case "around": 
          this.justify = "space-around";
          break; 
        case "evenly": 
          this.justify = "space-evenly";
          break;   
      }
    } else {
      //align-items based on xAlign
    }
  }

  render() {
    const styles = css`
    display: flex;
    flex-direction: ${this.direction};
    justify-content: ${this.direction === "row" ? typeof this.spacing != 'number' ? this.justify : this.yAlign : undefined};
    align-items: ${this.direction !== "row" ? this.xAlign : undefined};
    gap: ${typeof this.spacing != 'number' ? this.spacing + 'rem': undefined};
  `;

    return (
      <Host className={styles}>
        <slot></slot>
      </Host>
    );
  }

}
