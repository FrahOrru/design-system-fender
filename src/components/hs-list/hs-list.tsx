import { Component, h, Prop } from '@stencil/core';
import { css } from '@emotion/css';
import * as JsVariables from '../../design-tokens/js/variables';

@Component({
  tag: 'hs-list',
  styleUrl: 'hs-list.css',
  shadow: true,
})
export class HsList {

  @Prop()
  type: "unordered" | "ordered" = "unordered";

  render() {

    const Tag = `${this.type === 'unordered' ? 'ul' : 'ol'}`;

    const tagStyles = css`
      text-size:${JsVariables.TypographySize60FontSize}px;
    `;
 
    return (
      <Tag class={tagStyles}>
        <slot></slot>
      </Tag>
    );
  }

}
