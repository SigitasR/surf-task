# Tech task solution

Automated test suite using TypeScript + Playwright.

## Project setup and structure

Project is organized into a couple of directories:

`page-objects` - contains page object and components that describe web page elements

`tests` - test suite files

Inside project directory run NPM to install project dependencies:

```shell
npm install
```

Then install Playwright browsers:

```shell
npx playwright install
```

## Running tests

### Entire suite:

There are several scripts in `package.json` to simplify test execution:

```shell
npm run chrome
```
and

```shell
npm run firefox
```

will run entire suite in corresponding browser.

To view the report run:

```shell
npm run report
```

Report contains test execution details and video recording.

### Individual tests:

Playwright allows running individual spec files or tests. To run all tests from specific file, use:

```shell
npx playwright test coupon.spec.ts --headed --project chromium
```

To run individual test by its name, use partial or full name:

_Valid coupon test case:_

```shell
npx playwright test -g "valid coupon is applied correctly" --headed --project chromium
```

_Invalid coupon test case_

```shell
npx playwright test -g "invalid coupon is applied" --headed --project chromium
```

_Subscription plans page test case_

```shell
npx playwright test -g "subscription plans page" --headed --project chromium
```

_Step navigation test case_

```shell
npx playwright test -g "step navigation" --headed --project chromium
```

If test execution is too fast you can slow it down by uncommenting `launchOptions: { slowMo: 500 }` option in [playwright.config.ts](playwright.config.ts)

