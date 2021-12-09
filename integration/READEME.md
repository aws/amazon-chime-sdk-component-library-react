# README - Integration Testing

The Amazon Chime SDK React Components Library uses [Mocha](https://mochajs.org/) and [Selenium](https://www.selenium.dev/) for integration testing.

```plaintext
integration
  ├── app
  │   └── test-demo           # Demo Application for integration testing
  ├── pages                   # Page Object Models
  ├── script                  # Scripts to facilitate integration testing
  ├── test                    # Integration test suites
  └── utils                   # Tools and configs
```

## Run-Test Script

The `run-test` script in `/script` folder will:

1. start the test demo
2. run the test suites
3. check the test result

To execute the `run-script` script, simply call:

```plaintext
npm run test
```

> Note: By default, all the test suites are run locally with the Chrome browser.

To specify the test suite, host, browser version and operation system platform, you could run the script with extra named arguments.

For example, running test on Sauce Labs with latest version Firefox browser on Mac.

```plaintext
npm run test -- --test=roster --host=sauce-firefox --browser-version=latest --platform-name=Mac
```

```plaintext
npm run test -- -t=roster -h=sauce-firefox -v=latest -p=Mac
```

### Usage

```plaintext
Usage: run-test -- [-t test] [-h host] [-b browser-version] [-p platform-name]
  -t, --test                    Target test suite [default: all]
  -h, --host                    Target browser and WebDriver server [default: sauce-chrome]
  -v, --browser-version         Version of the browser to use [default: latest]
  -p, --platform-name           Name of the operating system the browser should be running on [default: Windows 10]

Values:
  -t, --test
    all: ../test/*
    roster: ../test/roster-test.js

  -h, --host
    chrome: Chrome browser running locally
    sauce-chrome: Chrome browser running on Sauce Labs
    firefox: Firefox browser running locally
    sauce-firefox: Firefox browser running on Sauce Labs

  -v, --browser-version
    check https://docs.saucelabs.com/dev/test-configuration-options/#browserversion

  -p, --platform-name
    check https://docs.saucelabs.com/dev/test-configuration-options/#platformname
```

> Note: The `-v, --browser-version` and `-p, --platform-name` options are only available when executing tests on Sauce Labs.
