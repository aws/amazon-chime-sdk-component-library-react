# Amazon Chime SDK React Components Library

<a href="https://www.npmjs.com/package/amazon-chime-sdk-component-library-react"><img src="https://img.shields.io/npm/v/amazon-chime-sdk-component-library-react?style=flat-square"></a>
<a href="https://github.com/aws/amazon-chime-sdk-component-library-react"><img src="https://github.com/aws/amazon-chime-sdk-component-library-react/workflows/CI%20Workflow/badge.svg"></a>

[Amazon Chime SDK React Components Library Documentation](https://aws.github.io/amazon-chime-sdk-component-library-react/)

[Amazon Chime SDK for JavaScript Library](https://github.com/aws/amazon-chime-sdk-js/)

The Amazon Chime SDK makes it easy to add collaborative audio calling, video calling, and screen share features to web applications by using the same infrastructure services that power millions of Amazon Chime online meetings.

The Amazon Chime SDK React Component Library supplies client-side state management and reusable UI components for common web interfaces used in audio and video conferencing applications, including: video tile grids, microphone activity indicators, and call controls. All components come with a simple, modern design, and can be used as-is or restyled with a custom theme. In addition to UI components, the library leverages Reacts' state management tools such as Providers and Hooks to connect to the Amazon Chime SDK for JavaScript and pass data to the UI layer, simplifying state synchronization so that developers can concentrate on building engaging experiences.

The Amazon Chime React Component Library can be added to your web application codebase using npm.

Documentation on these components and how to use them can be found on [Amazon Chime SDK React Component Library Documentation](https://aws.github.io/amazon-chime-sdk-component-library-react/).

Please check use-cases in our [How-to guide](https://aws.github.io/amazon-chime-sdk-component-library-react/?path=/story/how-tos--page) for more information.

### To get started, see the following resources:

[Amazon Chime SDK](https://aws.amazon.com/chime/chime-sdk/)

[Amazon SDK Pricing](https://aws.amazon.com/chime/pricing/#Chime_SDK_)

[Supported Browsers](https://docs.aws.amazon.com/chime/latest/dg/meetings-sdk.html#mtg-browsers)

[Amazon Chime API Reference](https://docs.aws.amazon.com/chime/latest/APIReference/Welcome.html)

[Amazon Chime SDK for JavaScript Documentation](https://aws.github.io/amazon-chime-sdk-js/#amazon-chime-sdk-for-javascript)

[Migration from V1 to V2](https://aws.github.io/amazon-chime-sdk-component-library-react/?path=/docs/migration-to-v2--page)

## Examples

[Meeting Demo](https://github.com/aws-samples/amazon-chime-sdk/tree/main/apps/meeting)

[Chat Demo](https://github.com/aws-samples/amazon-chime-sdk/tree/main/apps/chat)

[Breakout Room Demo](https://aws.amazon.com/blogs/business-productivity/breakout-room-amazon-chime-sdk-react-component-library/)

## Installation and Development

If you are adding this library to your existing application, add `amazon-chime-sdk-component-library-react` and the necessary peer dependencies to your project.

```
npm install --save amazon-chime-sdk-component-library-react amazon-chime-sdk-js styled-components styled-system
```

Otherwise clone the repo and install the dependencies.

## Contributing to the component library

### To generate dependencies

```
git clone https://github.com/aws/amazon-chime-sdk-component-library-react.git
npm install
```

### To run the Storybook server locally

```
npm start
```

### Build

```
npm run build
```

Once you build, check and resolve any warnings you may get like unresolved dependencies or circular dependencies. Remove these as it will help in bundling the library warning/error free.

### Test

Run all unit test suites.

```
npm run test
```

Run an individual unit test suite.

```
npm run test -- <filepath>
```

Run all unit test suites in watch mode

```
npm run test -- --watch
```

Run all snapshot test suites. [Docker](https://docs.docker.com/install/) is required to run Puppeteer in a Docker container.

```
npm run test:snapshots
```

#### Troubleshooting

> Error 1: Service 'chromium' failed to build : toomanyrequests: You have reached your pull rate limit

You may need to create a [Docker Hub](https://hub.docker.com/) account and [authenticate pull request from Docker Hub](https://docs.docker.com/docker-hub/download-rate-limit/#how-do-i-authenticate-pull-requests). Unauthenticated (anonymous) users will have the limits enforced via IP.

> Error 2: Timeout when you run `npm run test:snapshots`

You have 2 options:

1. Set an environment variable `WAIT_ON_TIMEOUT=600000` (e.g. 10 minutes. By default, it's 5 minutes). It will wait for a longer time while checking for the server to respond.
2. Start storybook server locally by running `npm start`, then run `npm run test:snapshots`.

Run an individual snapshot test suite, make sure that storybook server is running locally before kicking off the test.

```
npm run test:snapshots-path -- <filepath>
```

Run an individual snapshot test suite and override existing snapshot(s).

```
npm run test:snapshots-path -- <filepath> -u
```

A code coverage summary will be printed at the end of each `npm run test` run. Full coverage including coverage for each file is generated in a `lcov-report` html file that can be rendered in the browser. This is generated in a `/coverage` directory on each test run.

## License

This project is licensed under the Apache-2.0 License.

Copyright 2020-2021 Amazon.com, Inc. or its affiliates. All Rights Reserved.
