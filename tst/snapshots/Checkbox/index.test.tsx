describe('Checkbox', () => {
  it('unchecked', async () => {
    await page.goto('http://host.docker.internal:9009/iframe.html?id=form-checkbox--checkbox');
    const image = await page.screenshot();
    expect(image).toMatchImageSnapshot();
  });

  it('checked', async () => {
    await page.goto('http://host.docker.internal:9009/iframe.html?id=form-checkbox--checkbox&knob-checked=true');
    const image = await page.screenshot();
    expect(image).toMatchImageSnapshot();
  });
});