import { Component, Host, h, Prop } from '@stencil/core';
import { radioButtonStore } from './hs-radio-button-store';

@Component({
  tag: 'hs-radio-group',
  styleUrl: 'hs-radio-group.css',
  shadow: true,
})
export class HsRadioGroup {

  @Prop({reflect: true})
  selected;

  @Prop({ reflect: true})
  name;

  componentWillLoad(){
    setTimeout(() => {
      radioButtonStore.state.selectedValue = this.selected;
    })
  }

  render() {
    return (
      <Host>
          <slot></slot>
      </Host>
    );
  }

}
