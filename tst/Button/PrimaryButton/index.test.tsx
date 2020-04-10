describe('Primary Button', () => {
  it('visually looks correct', async () => {
    await page.goto('http://localhost:9009/iframe.html?id=button--primary-button');

    const element = await page.$('button');

    const image = await element.screenshot();
    expect(image).toMatchImageSnapshot();
  });

  it('visually looks correct on hover', async () => {
    await page.goto('http://localhost:9009/iframe.html?id=button--primary-button');

    await page.hover('button')
    const element = await page.$('button');

    const image = await element.screenshot();
    expect(image).toMatchImageSnapshot();
  });

  it('visually looks correct on focus', async () => {
    await page.goto('http://localhost:9009/iframe.html?id=button--primary-button');

    await page.focus('button')
    const element = await page.$('button');

    const image = await element.screenshot();
    expect(image).toMatchImageSnapshot();
  });


  it('visually looks correct on active', async () => {
    await page.goto('http://localhost:9009/iframe.html?id=button--primary-button');

    const element = await page.$('button');
    await page.mouse.down()

    const image = await element.screenshot();
    expect(image).toMatchImageSnapshot();
  });
});