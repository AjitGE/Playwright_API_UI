# Playwright Test Automation Framework

This is a TypeScript-based test automation framework using Playwright. The framework implements the Page Object Model pattern and includes features such as logging and HTML reporting.

## Features

- TypeScript support
- Page Object Model implementation
- Winston logger integration
- HTML reporting
- Cross-browser testing support
- Singleton pattern for page management

## Project Structure

```
├── src/
│   ├── pages/           # Page Object Model classes
│   └── utils/           # Utility classes (Logger, PageManager)
├── tests/              # Test files
├── logs/               # Log files (generated during test execution)
└── playwright-report/  # HTML test reports
```

## Setup

1. Install dependencies:

```bash
npm install
```

2. Install Playwright browsers:

```bash
npx playwright install
```

## Running Tests

- Run all tests:

```bash
npm test
```

- Run tests in headed mode:

```bash
npm run test:headed
```

- Run tests in debug mode:

```bash
npm run test:debug
```

- Run tests in specific browsers:

```bash
npm run test:chrome
npm run test:firefox
npm run test:safari
```

## View Test Report

To view the HTML report after test execution:

```bash
npm run report
```

## Logging

Logs are automatically generated in the `logs` directory:

- `error.log`: Contains error-level logs
- `combined.log`: Contains all logs

## Page Object Model

The framework implements the Page Object Model pattern. Page objects are located in `src/pages/` directory. Each page object represents a page or component of the application under test.

## Page Manager

The `PageManager` class implements the Singleton pattern to manage browser, context, and page instances throughout the test execution.
