import { newE2EPage } from '@stencil/core/testing';

describe('hs-flex', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<hs-flex></hs-flex>');

    const element = await page.find('hs-flex');
    expect(element).toHaveClass('hydrated');
  });
});
