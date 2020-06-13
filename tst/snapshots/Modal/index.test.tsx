describe('Modal', () => {
    it('visually looks correct at size medium', async () => {
      await page.goto('http://localhost:9009/iframe.html?id=modal--basic-example&knob-size=medium');
  
      await page.click('button');
      // waiting for the underlying Portal component to render into the DOM
      await page.waitFor(300);
  
      const image = await page.screenshot();
      expect(image).toMatchImageSnapshot();
    });
  
    it('visually looks correct at size large', async () => {
      await page.goto('http://localhost:9009/iframe.html?id=modal--basic-example&knob-size=large');
  
      await page.click('button');
      await page.waitFor(300);
  
      const image = await page.screenshot();
      expect(image).toMatchImageSnapshot();
    });
  
    it('visually looks correct at size full screen', async () => {
      await page.goto('http://localhost:9009/iframe.html?id=modal--basic-example&knob-size=fullscreen');
  
      await page.click('button');
      await page.waitFor(300);
  
      const image = await page.screenshot();
      expect(image).toMatchImageSnapshot();
    });
  });