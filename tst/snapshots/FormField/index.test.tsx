// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

describe('FormField', () => {
  const tests = [
    {
      field: 'basic-input',
      layouts: ['stack', 'horizontal', 'input-only'],
      toggleError: true,
    },
    {
      field: 'select',
      layouts: ['stack', 'horizontal', 'input-only'],
      toggleError: true,
    },
    {
      field: 'textarea',
      layouts: ['stack', 'horizontal', 'input-only'],
      toggleError: true,
    },
    {
      field: 'checkbox',
    },
    {
      field: 'radio-group',
      toggleError: true,
    },
    {
      field: 'mixed-inputs',
      layouts: ['stack', 'horizontal', 'input-only'],
      toggleError: true,
    },
  ];

  tests.forEach((test) => {
    const baseUrl = `http://host.docker.internal:9009/iframe.html?id=ui-components-form-formfield--${test.field}-form-field`;
    let urls = [];
    if (test.layouts) {
      urls = test.layouts.map((layout) => `${baseUrl}&knob-layout=${layout}`);
    }
    urls.length || urls.push(baseUrl);

    if (test.toggleError) {
      urls = [...urls, ...urls.map((url) => `${url}&knob-Toggle Error=true`)];
    }

    urls.forEach((url) => {
      it(url.slice(url.lastIndexOf('id=') + 3), async () => {
        await page.goto(url);
        const image = await page.screenshot();
        expect(image).toMatchImageSnapshot();
      });
    });
  });
});
