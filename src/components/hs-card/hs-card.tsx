import { Component, h, Prop } from '@stencil/core';
import { css } from '@emotion/css';

@Component({
  tag: 'hs-card',
  styleUrl: 'hs-card.css',
  shadow: false,
  scoped: true
})
export class HsCard {

  @Prop({ reflect: true })
  type: "medium" | "small" = "small"

  @Prop({ reflect: true })
  image: string;

  @Prop({ reflect: true })
  header: string;

  @Prop({ reflect: true })
  content: string;

  render() {
    let tagStyles = css``;

    if(this.image && this.type !== 'small') {
      tagStyles = css`
        background: url(${this.image});
        background-position: center;
        background-size: cover;
    `;
    }

    return (
      <div class={`${this.type} ${tagStyles}`}>
        <div class="card-container">
          {
            this.type === 'small' ?
            <img src={this.image}></img>:
            null
          }
          <div class="card-header">
            <hs-header level={5}>{this.header}</hs-header>
          </div>
          <div class="card-body">
            <span>{this.content}</span>
          </div>
        </div>
        <slot></slot>
      </div>
    );
  }

}
