describe('Modal', () => {
    it('visually looks correct at size medium', async () => {
      await page.goto('http://localhost:9009/iframe.html?id=modal--medium');
  
      await page.click('button')
  
      const image = await page.screenshot();
      expect(image).toMatchImageSnapshot();
    });
  
    it('visually looks correct at size large', async () => {
      await page.goto('http://localhost:9009/iframe.html?id=modal--large');
  
      await page.click('button')
  
      const image = await page.screenshot();
      expect(image).toMatchImageSnapshot();
    });
  
    it('visually looks correct at size full screen', async () => {
      await page.goto('http://localhost:9009/iframe.html?id=modal--fullscreen');
  
      await page.click('button')
  
      const image = await page.screenshot();
      expect(image).toMatchImageSnapshot();
    });
  });