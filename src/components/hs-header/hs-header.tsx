import { Component, h, Prop } from '@stencil/core';
import { css } from '@emotion/css';
import * as JsVariables from '../../design-tokens/js/variables';

/**
 * The component starts with the @Component decorator, part of the TypeScript built-in capabilities
 * and currently an stage 3 proposal in the TC39 committee. More info:
 * https://github.com/tc39/proposal-decorators.
 * 
 * Please check out the comment blocks on top the component and its props. Whatever content we place
 * right above the @Component decorator will become the actual description of teh component in
 * the generated documentation. Such blocks do support markdown syntax, so you can provide rich descriptions
 * right on the code. 
 * 
 * Same applies to @Prop decorators: Whatever text we place right on top of each Prop will eventually be included
 * in the properties output table displayed in the README docs generated upon building the project.
 */

/**
 * Heading component, with support for header elements spanning from `H1` to `H6`, and custom alignment.
 * Its convenience for pointing out document sections makes it one of the most consumed
 * components in our Design System.
 * ### Example:
 * ```html
 * <hs-heading level="1" text-align="center">Section name</hs-heading>
 * ```
 */
@Component({
  // The component decorator object payload is documented at https://stenciljs.com/docs/component
  tag: 'hs-header',
  styleUrl: 'hs-header.css',
  shadow: false,
  scoped: true,
})
export class HsHeader {
  /**
   * Component public properties begin here.
   * These can be recognized by the @Prop decorator. The truthy 'reflect'
   * property of the decorator object payload ensures that such property
   * will be also available in HTML, and not just when consuming Stencil
   * components from other components. 
   */

  /**
   * The `level` property allows users to indicate what header hierarchy this element is.
   * It mus take a number from `1` to `6`.
   */
  @Prop({ reflect: true })
  level: number = 1; // This annotation is a TypeScript union type, defaulting to 1
  
  /**
   * Provides support for implementing horizontal alignment to the text contained in the header.
   */
  @Prop({ reflect: true })
  textAlign: 'left' | 'right' | 'center' = 'left'; // This annotation is a TypeScript union type with a default value set to 'left'

  /**
   * This is a class field. It is not visible as a property since it lacks
   * the @Prop decorator, but can consumed internally from other functions and
   * the JSX template by referring to it as this.headerAriaAttributes.
   */
  headerAriaAttributes = {};
  
  fontSize;
  fontWeight;

  /**
   * Will trigger just once upon mounting the component on the HTML for the first time.
   */
  componentWillLoad() {
    /**
     * We validate here that the 'level' property, which will be used later to compose a 
     * HTML tag 'on the fly', will only take values from 1 to 6. TypeScript gives us
     * statical type checking on dev time but TypeScript annotations are wiped once the component
     * is traspiled. This conditional check ensures that the component is properly used
     * later on "in the wild".
     */
    if (this.level < 1 || this.level > 5) {
      throw new Error("HsHeader: the level property must be between 1 and 6");
    }

    switch(this.level) {
        case 1:
            this.fontSize = `${JsVariables.TypographyHeadersH1FontSize}px`;
        case 2:
            this.fontSize = `${JsVariables.TypographyHeadersH2FontSize}px`;
        case 3:
            this.fontSize = `${JsVariables.TypographyHeaders3FontSize}px`;
        case 4:
            this.fontSize = `${JsVariables.TypographyHeaders4FontSize}px`;      
        case 5:
            this.fontSize = `${JsVariables.TypographyHeaders5FontSize}px`;      
    }
  }

  render() {
    // We create a JSX tag on the fly
    const Tag = `h${this.level}`;

    /**
     * This is a runtime-generated className object, built via the @emotion/css
     * library. As a JS object, it can embed values (via template strings) coming
     * from our set of Design Tokens traspiled into JS constants. This is a convenient
     * way to implement dynamic CSS based on component logic or external tokens.
     */
    const tagStyles = css`
      text-size:${this.fontSize};  
      text-align: ${this.textAlign};
    `;
 
    return (
      <Tag className={tagStyles} role="heading">
        <slot></slot>
      </Tag>
    );
  }
}
