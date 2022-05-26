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

## Start the Entire Testing Process

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

For example, running **roster** test on **Sauce Labs** with **latest** version **Firefox** browser on **Mac with macOS Monterey**.

```plaintext
npm run test -- --test=roster --host=sauce-firefox --browser-version=latest --platform-name='macOS 12'.
```

You can also use shorthand commands.

```plaintext
npm run test -- -t=roster -h=sauce-firefox -v=latest -p='macOS 12'
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
    chrome: Run tests locally with Chrome
    firefox: Run tests locally with Firefox
    safari: Run tests locally with Safari
    sauce-chrome: Run tests on Sauce Labs with Chrome
    sauce-firefox: Run tests on Sauce Labs with Firefox
    sauce-safari: Run tests on Sauce Labs with Safari

Below options are only available when executing tests on Sauce Labs
  -v, --browser-version
    check example here: https://saucelabs.com/platform/platform-configurator#/
  -p, --platform-name
    check example here: https://saucelabs.com/platform/platform-configurator#/
```

> Note: The `browser-version` and `platform-name` options are only available when executing tests on Sauce Labs.
>
> For Firefox and Chrome, the default `browser-version` is `latest`, the default `platform-name` is `Windows 10`.
>
> For Safari, the default `browser-version` is `15` (Safari 15), the default `platform-name` is `macOS 12` (macOS Monterey).

## Start the Integration Testing Only

When you develop or debug the integration testing, you may want to only start the test. The `npm run test:fast` script can do the job. It starts the mocha test and executes all the test scripts in `/test` folder.

```plaintext
"test:fast": "mocha ./test/*"
```

If you want to run a specific test script. You could add a new node script in `package.json` and specify the test script. For example, to only run the roster test:

```plaintext
"test:fast-roster": "mocha ./test/roster_test.js"
```

To enable the entire testing process:

1. Start the test demo

    ```plaintext
    cd app/test-demo
    npm install
    npm run start
    ```

2. Run all integration test

    ```plaintext
    npm run test:fast
    ```

To change the browser on which the test is run, simply change the host property in `/utils/config.js` file.

```js
// By default is to run tests locally with Chrome
host: process.env.HOST || 'chrome'

// To run tests locally with Firefox
host: process.env.HOST || 'firefox'

// To run tests locally with Safari
host: process.env.HOST || 'safari'
```

### Run Test Suites on Sauce Labs

First you need to start the test demo locally.

```plaintext
cd app/test-demo
npm install
npm run start
```

Then, you need to update the `host` property in `/utils/config.js` file.

```js
// By default is to run tests locally with Chrome
host: process.env.HOST || 'chrome'

// To Run tests on Sauce Labs with Chrome
host: process.env.HOST || 'sauce-chrome'

// To Run tests on Sauce Labs with Firefox
host: process.env.HOST || 'sauce-firefox'

// To Run tests on Sauce Labs with Safari
host: process.env.HOST || 'sauce-safari'
```

Last, you need to [setup the Sauce Connect Proxy](https://docs.saucelabs.com/secure-connections/sauce-connect/setup-configuration/basic-setup/) manually to allow Sauce Labs accessing the test demo running on your local machine.

1. [Install Sauce Connect Proxy Client on your local machine](https://docs.saucelabs.com/secure-connections/sauce-connect/installation/).
2. Open your terminal and navigate to the Sauce Connect Proxy client bin folder on your local machine.

   ```plaintext
   cd sc-4.7.1-osx/bin
   ```

3. From your command line terminal, launch a tunnel with the below commands.

   > Note: The default tunnel name in `config.js` is "test-tunnel". it's recommended to use this tunnel name when you **test or debug the test suites locally** so you don't need to change anything there.
   >
   > If you don't assign value for `--tunnel-name` parameter, an unnamed tunnel will be created. **DO NOT create any unnamed tunnel. This operation will break our integration tests and trigger alerts.** According to [Sauce Labs documentation](https://docs.saucelabs.com/secure-connections/sauce-connect/setup-configuration/basic-setup/#using-tunnel-names), unnamed tunnel will automatically be used for all tests. This will cause all tests to come to this unnamed tunnel, queue up for execution and eventually fail due to timeouts. Also the active Sauce Labs session may exceed the limit.

   ```plaintext
   ./sc -u $SAUCE_USERNAME -k $SAUCE_ACCESS_KEY --region $SAUCE_DC --tunnel-name {TUNNEL_NAME}
   ```

   You can also find this snippet on Sauce Labs, with your credentials populated. Go to the "TUNNELS" page and skip to "STEP 3: Configure & Authenticate".

Now you can run the test suites on Sauce Labs via `npm run test:fast`.

> Note: If you follow this approach to run the test suite on Sauce Labs, the test may fail due to some unknown restriction.
>
> For Firefox and Chrome, the attendees are not able to join the meeting successfully, and the test will be timed out eventually due to WebSocket connection failure.
>
> This issue will be automatically addressed when the GitHub Action triggers the integration testing, because the test demo will be run on the GitHub Runner instead of your local machine.

## TroubleShooting

If your tests use one Web Driver with multiple tabs for different attendees to join the same meeting, only for Safari, the attendees will be able to join the meeting at the beginning, but will have bad `signalStrength` then and drop the meeting after around 30 seconds. This is because Safari doesn't allow the audio to play across the tabs. The Amazon Chime SDK for JavaScript uses audio signal to determine whether or not a attendee is present in the meeting. To avoid this issue, you need to use multiple WebDrivers and each attendee joins the meeting from a different WebDriver.
