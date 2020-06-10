describe('Checkbox Snapshots', () => {
  it('unchecked checkbox', async () => {
    await page.goto('http://localhost:9009/iframe.html?id=form-checkbox--checkbox');
    const image = await page.screenshot();
    expect(image).toMatchImageSnapshot();
  });

  it('checked checkbox', async () => {
    await page.goto('http://localhost:9009/iframe.html?id=form-checkbox--checkbox&knob-checked=true');
    const image = await page.screenshot();
    expect(image).toMatchImageSnapshot();
  });
});