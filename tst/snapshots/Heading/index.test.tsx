describe('Heading', () => {
  it('css=color: palevioletred, level=h1', async () => {
    await page.goto('http://host.docker.internal:9009/iframe.html?id=headings--basic-heading&knob-css=color: palevioletred;&knob-level=h5');
    const image = await page.screenshot();
    expect(image).toMatchImageSnapshot();
  });

  it('css=color: black, level=h2', async () => {
    await page.goto('http://host.docker.internal:9009/iframe.html?id=headings--basic-heading&knob-css=color: black;&knob-level=h2');
    const image = await page.screenshot();
    expect(image).toMatchImageSnapshot();
  });

  it('css=color: deepskyblue, level=h3, as=p', async () => {
    await page.goto('http://host.docker.internal:9009/iframe.html?id=headings--basic-heading&knob-css=color:%20deepskyblue;&knob-level=h3&knob-as=p');
    const image = await page.screenshot();
    expect(image).toMatchImageSnapshot();
  });

  it('css=color: green, level=h4, as=a', async () => {
    await page.goto('http://host.docker.internal:9009/iframe.html?id=headings--basic-heading&knob-css=color:%20green;&knob-level=h4&knob-as=a');
    const image = await page.screenshot();
    expect(image).toMatchImageSnapshot();
  });
});