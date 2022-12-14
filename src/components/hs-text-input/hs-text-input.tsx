import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'hs-text-input',
  styleUrl: 'hs-text-input.css',
  shadow: false,
  scoped: true
})
export class HsTextInput {

  @Prop({reflect: true})
  type: "primary" | "success" | "warning" | "error" = "primary";

  @Prop({ reflect: true})
  helpText: boolean = false;

  @Prop({ reflect: true})
  helpTextContent: string;

  @Prop({reflect:true})
  placeholder: string;

  @Prop({ reflect: true})
  disabled: boolean = false;

  @Prop({ reflect: true})
  label: string;

  render() {
    return (
      <hs-stack orientation='vertical' gap="small" >
        
        {
          this.label ?
          <label class={`${this.disabled ? 'disabled' : null}`} htmlFor="input">{this.label}</label> :
          null
        }

        <input id="input" class={`${this.type} ${this.disabled ? 'disabled' : null}`} type="text" disabled={this.disabled} placeholder={this.placeholder}/>
        
        {
          this.helpText ?
          <hs-help-text type={this.type}>
          {this.helpTextContent}
          </hs-help-text> :
          null
        }
        
        <slot></slot>
      </hs-stack>
    );
  }

}
