This is the SDK react meeting demo app. It shows how to use the Amazon Chime SDK and Chime SDK UI Component Library to build a react meeting app.

Using the component SDK library in the demo  meeting app:
1. In root of the library directory (where component SDK package.json resides): 
```
npm install
```
2. Clear the existing `lib` build folder: 
```
rm -rf lib
```
3. Create the `lib` build folder: 
```
npm run build
```
4. Change directory to demo meeting app: 
```
cd demo/meeting
```
5. Clear `node_modules` and `dist` folders for fresh setup: 
```
rm -rf node_modules && rm -rf dist
```
6. Install library locally in `demo/meeting` app, here `../..` is the relative path to library's root:
```
npm i --save ../..
```
7. Now you can import the components from the library like shown below:
```tsx
import React from 'react';
import { PrimaryButton, lightTheme } from 'amazon-chime-sdk-react';
import { ThemeProvider } from 'styled-components';

const Test = () => (
  <div>
    <ThemeProvider theme={lightTheme}>
      <PrimaryButton
        className="test-primary-button"
        label="Test Primary Button"
      />
    </ThemeProvider>
  </div>
);

export default Test;

```

To run the react app:
1. Navigate to the `demo/meeting` folder

2. Run `npm install`

3. Start the webpack server: `npm run start:client`

4. In another terminal in the same directory, start the node server: `npm run start:backend`

5. Open https://0.0.0.0:9000/ in your browser