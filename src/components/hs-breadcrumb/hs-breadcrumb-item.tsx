import { Component, h, Prop } from '@stencil/core';
import { css } from '@emotion/css';

@Component({
  tag: 'hs-breadcrumb-item',
  styleUrl: 'hs-breadcrumb-item.css',
  shadow: true,
})
export class HsBreadcrumbItem {

  @Prop({ reflect: true })
  name: string;

  @Prop({ reflect: true })
  href?: string;

  @Prop({ reflect: true, attribute: 'isLastItem' })
  isLastItem: boolean = false;

  chevron =
    'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAxMiAyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTAuNjY2NzQ4IDAuNDgwNDY5QzEuMDU3MzcgMC4wODk4NDM4IDEuNjkwNDMgMC4wODk4NDM4IDIuMDgxMDUgMC40ODA0NjlMMTAuMTg1OSA4LjU4NTQ1TDEwLjIxMjggOC41NTg1OUwxMS42MjcgOS45NzI2NkwxMS42MDAxIDkuOTk5NTFMMTEuNjI3IDEwLjAyNjRMMTAuMjEyOCAxMS40NDA5TDEwLjE4NTggMTEuNDE0MUwyLjA4MTA1IDE5LjUxODZDMS42OTA1NSAxOS45MDkyIDEuMDU3MzcgMTkuOTA5MiAwLjY2Njg3IDE5LjUxODZDMC40MTQ1NTEgMTkuMjY2MSAwLjMyNTE5NSAxOC45MTI2IDAuMzk4ODA0IDE4LjU4ODlDMC40MzkyMDkgMTguNDExNiAwLjUyODU2NCAxOC4yNDI3IDAuNjY2ODcgMTguMTA0NUw4Ljc3MTYxIDkuOTk5NTFMMC42NjY3NDggMS44OTQ1M0MwLjI3NjI0NSAxLjUwNDM5IDAuMjc2MjQ1IDAuODcxMDk0IDAuNjY2NzQ4IDAuNDgwNDY5WiIgZmlsbD0iIzEyMTIxMiIvPgo8L3N2Zz4K';

  styling = css`
    background-image: url(${this.chevron});
    background-size: 20px 20px;
    background-position: 98%;
    background-repeat: no-repeat;
    width: 20px;
  `;
  
  renderSymbol() {
    if (!this.isLastItem) return <div class={this.styling}></div>;
  }

  render() {
    return (
      <hs-stack orientation="horizontal" gap={4}>
        <a href={this.href}>
          <sr-box
            borderRadius="small"
            isClickable
            paddingLeft="spacer-1"
            paddingRight="spacer-1"
            margin="spacer-0"
          >
            <span>{this.name}</span>
          </sr-box>
        </a>
        {this.renderSymbol()}
      </hs-stack>
    );
  }

}
