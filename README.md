# Chime SDK UI Component Library

[Chime SDK UI Component Library Documentation](https://aws.github.io/amazon-chime-sdk-component-library-react/)

<a href="https://www.npmjs.com/package/amazon-chime-sdk-component-library-react"><img src="https://img.shields.io/npm/v/amazon-chime-sdk-component-library-react?style=flat-square"></a>
<a href="https://github.com/aws/amazon-chime-sdk-component-library-react"><img src="https://github.com/aws/amazon-chime-sdk-component-library-react/workflows/CI%20Workflow/badge.svg"></a>

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

Once you build, check and resolve any warnings you may get like unresolved dependencies or circular dependencies. Remove these as it will help in bundling the library warning/error free.

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

Run snapshot image tests, [Docker](https://docs.docker.com/install/) installation is required to run puppeteer in container.

```
npm run test:snapshots
```

Run snapshot image test for one file, make sure storybook dev server is running locally before running test.

```
npm run test:snapshots-path -- <filepath>
```

Run snapshot image test for one file and override existing snapshots.

```
npm run test:snapshots-path -- <filepath> -u
```

A code coverage summary will be printed at the end of each `npm run test` run. Full coverage including coverage for each file is generated in a `lcov-report` html file that can be rendered in the browser. This is generated in a `/coverage` directory on each test run.

# Usage

After publishing your lib (ie `my-react-lib`) you can use it by importing the styles in your App's entry point:

Then you can import and use your components:

```tsx
//
import React from 'react';
import { Example } from 'my-react-lib';

export class App extends React.Component {
  render() {
    return <Example />;
  }
}
```

## License

This project is licensed under the Apache-2.0 License.

Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
