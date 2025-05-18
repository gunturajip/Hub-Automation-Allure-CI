## Playwright UI and API suite Automation

## Executing end-to-end test
  npx playwright test
    Runs the end-to-end tests.

## Executing end-to-end test with debug
  npx playwright test --ui
    Starts the interactive UI mode.

## Executing end-to-end test on chromium
  npx playwright test --project=chromium
    Runs the tests only on Desktop Chrome.

## Executing end-to-end test with debug
  npx playwright test example
    Runs the tests in a specific file.

  npx playwright test --debug
    Runs the tests in debug mode.

## Record the script > copy and paste it into your class file
  npx playwright codegen
    Auto generate tests with Codegen.

## Headless executing test
We suggest that you begin by typing:

    npx playwright test

## And check out the following files:
  - .\tests\example.spec.js - Example end-to-end test
  - .\tests-examples\demo-todo-app.spec.js - Demo Todo App end-to-end tests
  - .\playwright.config.js - Playwright Test configuration