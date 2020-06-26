describe('Radio Group', () => {
  it('radio group', async () => {
    await page.goto('http://host.docker.internal:9009/iframe.html?id=form-radiogroup--radio-group');
    const image = await page.screenshot();
    expect(image).toMatchImageSnapshot();
  });
});