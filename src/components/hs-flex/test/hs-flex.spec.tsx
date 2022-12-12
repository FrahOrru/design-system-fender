import { newSpecPage } from '@stencil/core/testing';
import { HsFlex } from '../hs-flex';

describe('hs-flex', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [HsFlex],
      html: `<hs-flex></hs-flex>`,
    });
    expect(page.root).toEqualHtml(`
      <hs-flex>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </hs-flex>
    `);
  });
});
