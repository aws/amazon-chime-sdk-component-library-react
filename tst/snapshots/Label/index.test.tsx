describe('Label', () => {
  it('label', async () => {
    await page.goto('http://host.docker.internal:9009/iframe.html?id=form-label--label');
    const image = await page.screenshot();
    expect(image).toMatchImageSnapshot();
  });
});