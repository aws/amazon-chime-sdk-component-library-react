describe('ControlBar', () => {
  it('top layout', async () => {
    await page.goto('http://localhost:9009/iframe.html?id=controlbar--control-bar');
    const image = await page.screenshot();
    expect(image).toMatchImageSnapshot();
  });

  it('bottom layout', async () => {
    await page.goto('http://localhost:9009/iframe.html?id=controlbar--control-bar&knob-show%20labels=true&knob-layout=bottom');
    const image = await page.screenshot();
    expect(image).toMatchImageSnapshot();
  });

  it('right layout', async () => {
    await page.goto('http://localhost:9009/iframe.html?id=controlbar--control-bar&knob-show%20labels=true&knob-layout=right');
    const image = await page.screenshot();
    expect(image).toMatchImageSnapshot();
  });

  it('left layout', async () => {
    await page.goto('http://localhost:9009/iframe.html?id=controlbar--control-bar&knob-show%20labels=true&knob-layout=left');
    const image = await page.screenshot();
    expect(image).toMatchImageSnapshot();
  });


  it('floating-vertical layout', async () => {
    await page.goto('http://localhost:9009/iframe.html?id=controlbar--control-bar&knob-show%20labels=true&knob-layout=undocked-vertical');
    const image = await page.screenshot();
    expect(image).toMatchImageSnapshot();
  });

  it('floating-horizontal layout', async () => {
    await page.goto('http://localhost:9009/iframe.html?id=controlbar--control-bar&knob-show%20labels=true&knob-layout=undocked-horizontal');
    const image = await page.screenshot();
    expect(image).toMatchImageSnapshot();
  });

  it('hidden labels', async () => {
    await page.goto('http://localhost:9009/iframe.html?id=controlbar--control-bar&knob-show%20labels=false&knob-layout=top');
    const image = await page.screenshot();
    expect(image).toMatchImageSnapshot();
  });
});