import { Component, h, Prop } from '@stencil/core';
import { css } from '@emotion/css';

@Component({
  tag: 'hs-box',
  styleUrl: 'hs-box.css',
  shadow: false,
  scoped: true
})
export class HsBox {

  @Prop({ reflect: true })
  backgroundColor: string;

  @Prop({ reflect: true})
  padding: number;

  @Prop({ reflect: true})
  paddingRight: number;

  @Prop({ reflect: true})
  paddingLeft: number;

  @Prop({ reflect: true})
  paddingTop: number;

  @Prop({ reflect: true})
  paddingBottom: number;

  @Prop({ reflect: true})
  margin: number;

  @Prop({ reflect: true})
  marginRight: number;

  @Prop({ reflect: true})
  margingLeft: number;

  @Prop({ reflect: true})
  marginTop: number;

  @Prop({ reflect: true})
  marginBottom: number;


  render() {
    return (
      <div class={this.builtCss()}>
        <slot></slot>
      </div>
    );
  }


  builtCss(){
    return css`
    background-color: #${this.backgroundColor};
    margin: ${this.margin}px;
    padding: ${this.padding}px;
  `;

  }
}

