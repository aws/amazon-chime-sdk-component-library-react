describe('Select', () => {
    it('select closed', async () => {
      await page.goto('http://host.docker.internal:9009/iframe.html?id=form-select--basic-input');
      const image = await page.screenshot();
      expect(image).toMatchImageSnapshot();
    });
  
    it('select open', async () => {
      await page.goto('http://host.docker.internal:9009/iframe.html?id=form-select--basic-input');
      
      await page.click('select');
      // wait for select transition to complete
      await page.waitFor(100);
      
      const image = await page.screenshot();
      expect(image).toMatchImageSnapshot();
    });
});