describe('Basic Button', () => {
    it('visually looks correct', async () => {
      await page.goto('http://host.docker.internal:9009/iframe.html?id=form-buttons--basic-button');
  
      const element = await page.$('button');
  
      const image = await element.screenshot();
      expect(image).toMatchImageSnapshot();
    });
  
    it('visually looks correct on hover', async () => {
      await page.goto('http://host.docker.internal:9009/iframe.html?id=form-buttons--basic-button');
  
      await page.hover('button');
      // wait for completion of background color transition, which is 100ms
      await page.waitFor(150);
      const element = await page.$('button');
  
      const image = await element.screenshot();
      expect(image).toMatchImageSnapshot();
    });
  
    it('visually looks correct on focus', async () => {
      await page.goto('http://host.docker.internal:9009/iframe.html?id=form-buttons--basic-button');
  
      await page.focus('button');
      await page.waitFor(150);
      const element = await page.$('button');
  
      const image = await element.screenshot();
      expect(image).toMatchImageSnapshot();
    });
  
  
    it('visually looks correct on active', async () => {
      await page.goto('http://host.docker.internal:9009/iframe.html?id=form-buttons--basic-button');
  
      const element = await page.$('button');
      await page.mouse.down();
      await page.waitFor(150);
  
      const image = await element.screenshot();
      expect(image).toMatchImageSnapshot();
    });
  });