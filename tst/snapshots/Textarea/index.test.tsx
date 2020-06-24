describe('Textarea', () => {
  it('with value', async () => {
    await page.goto('http://host.docker.internal:9009/iframe.html?id=form-textarea--textarea&knob-value=some test value');
    const image = await page.screenshot();
    expect(image).toMatchImageSnapshot();
  });
});