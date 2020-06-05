# Chime SDK UI Component Library

This contains reusable components written with React, TypeScript and styled components to be used to create UIs with Chime SDK JS.

## To genereate dependencies

```
npm install
```

## To run Storybook locally

```
npm start
```

## Build

```
npm run build
```

## Test

Run all unit tests
```
npm run test
```
Run one file 
```
npm run test -- <filepath>
```
Run test in watch mode
```
npm run test -- --watch
```

A code coverage summary will be printed at the end of each `npm run test` run. Full coverage including coverage for each file is generated in a `lcov-report` html file that can be rendered in the browser. This is generated in a `/coverage` directory on each test run. 

# Usage

After publishing your lib (ie `my-react-lib`) you can use it by importing the styles in your App's entry point:



Then you can import and use your components:

```tsx
//
import React from 'react'
import { Example } from 'my-react-lib'

export class App extends React.Component {
  render() {
    return <Example />
  }
}
```
