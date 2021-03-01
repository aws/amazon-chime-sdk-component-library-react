# Chime SDK UI Component Library

[Chime SDK UI Component Library Documentation](https://aws.github.io/amazon-chime-sdk-component-library-react/)
[Migration from V1 to V2](https://aws.github.io/amazon-chime-sdk-component-library-react/?path=/docs/migration-to-v2--page)

<a href="https://www.npmjs.com/package/amazon-chime-sdk-component-library-react"><img src="https://img.shields.io/npm/v/amazon-chime-sdk-component-library-react?style=flat-square"></a>
<a href="https://github.com/aws/amazon-chime-sdk-component-library-react"><img src="https://github.com/aws/amazon-chime-sdk-component-library-react/workflows/CI%20Workflow/badge.svg"></a>

This contains reusable components written with React, TypeScript and styled components to be used to create UIs with Chime SDK JS.

## Contributing to the component library

### To generate dependencies

```
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
