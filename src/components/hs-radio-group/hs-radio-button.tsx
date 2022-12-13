import { Component, Host, h, Prop, State } from '@stencil/core';
import { radioButtonStore } from "./hs-radio-button-store"
@Component({
  tag: 'hs-radio-button',
  styleUrl: 'hs-radio-button.css',
  shadow: true,
})
export class HsRadioButton {
  @State()
  isChecked = false;

  @Prop({reflect: true})
  value;

  onClickHandler() {
    radioButtonStore.state.selectedValue = this.value;
  }

  componentWillLoad() {
    radioButtonStore.onChange('selectedValue', (value) => {
      this.isChecked = value === this.value;
    })
  }

  render() {
    return (
      <Host>
        <label class={this.isChecked && 'selected'}>
          <input 
            type="radio"
            id="input"
            value={this.value}
            onClick={this.onClickHandler.bind(this)}
            checked={this.isChecked}
            />
          <slot></slot>
        </label>
      </Host>
    );
  }

}
