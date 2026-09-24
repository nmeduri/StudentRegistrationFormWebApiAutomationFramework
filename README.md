# Student Registration Form Web API Automation Framework

## Project Overview

This project is an automated testing framework developed using **Playwright with TypeScript** for testing the Student Registration Form application.

The framework is designed to provide:

- UI test automation
- API test automation
- Reusable Page Object Model components
- External test data management
- Environment-based configuration
- Cross-browser execution
- HTML reporting
- Maintainable and scalable test automation

---

## 🛠️ Technology Stack

| Technology        | Purpose                  |
| ----------------- | ------------------------ |
| Playwright        | UI and API automation    |
| TypeScript        | Programming language     |
| Node.js           | Runtime environment      |
| npm               | Dependency management    |
| Playwright Test   | Test runner              |
| Page Object Model | Framework design pattern |
| Git               | Version control          |
| GitHub            | Source code repository   |

---

## Project Structure

StudentRegistrationFormWebApiAutomationFramework/
│
├── .github/
│ └── workflows/
│ └── playwright.yml
│
├── src/
│ ├── pages/
│ │ ├── BasePage.ts
│ │ └── StudentRegistrationFormPage.ts
└── FormPage.ts
│ │
│ ├── fixtures/
│ │ ├── pagefixtures.ts
│ │ └── apifixtures.ts
│ │
│ └── utils/
└── CsvHelper.ts
│
├── tests/
│ ├── studentregistrationform.spec.ts
│ └── api/
│
├── testdata/
│ ├── _.json
│ ├── _.csv
│ └── \*.xlsx
│
├── test-results/
├── playwright-report/
│
├── playwright.config.ts
├── package.json
├── package-lock.json
├── tsconfig.json
├── .gitignore
├── .env.example
└── README.md

## Prerequisites

Install the following before executing the tests:

- Node.js
- npm
- Git
- Visual Studio Code or any preferred IDE

Verify the installation:

```bash
node --version
npm --version
git --version
```

---

## 🚀 Installation

Clone the repository:

```bash
git clone <https://github.com/nmeduri/StudentRegistrationFormWebApiAutomationFramework.git>
```

Navigate to the project directory:

```bash
cd StudentRegistrationFormWebApiAutomationFramework
```

Install project dependencies:

```bash
npm install
```

Install Playwright browsers:

```bash
npx playwright install
```

---

## Environment Configuration

Environment-specific configuration should not contain credentials directly in the source code.

Create a local environment file based on `.env.dev` or `.env.qa`.

Example:

```env
BASE_URL=https://example.com
USER_NAME=your_username
PASSWORD_P=your_password
```

### Important

Do not commit the following files to Git:

```text
.env
.env.dev
.env.qa
.env.prod
```

Sensitive information should never be stored in the GitHub repository.

Use `.env.example` to document the required variables.

---

## Running Tests

### Run all Playwright tests

```bash
npx playwright test
```

### Run tests in headed mode

```bash
npx playwright test --headed
```

### Run a specific test file

```bash
npx playwright test tests/studentregistrationform.spec.ts
```

### Run a specific test

```bash
npx playwright test -g "Validate Page Title Test"
```

### Run tests using a specific browser

```bash
npx playwright test --project=chromium
```

```bash
npx playwright test --project=firefox
```

```bash
npx playwright test --project=webkit
```

---

## Cross-Browser Testing

The framework can be configured to execute tests against:

- Chromium
- Firefox
- WebKit

Example:

```bash
npx playwright test --project=chromium
```

---

## Test Reports

After execution, Playwright generates the HTML report.

Open the report using:

```bash
npx playwright show-report
```

The report provides:

- Test execution status
- Failed tests
- Execution duration
- Error details
- Screenshots
- Traces
- Test steps

---

## Screenshots, Videos and Traces

Playwright can capture debugging artifacts for failed tests.

Typical artifacts include:

```text
test-results/
playwright-report/
```

These generated files should not normally be committed to Git.

They are excluded through `.gitignore`.

---

## Framework Design

The framework follows the **Page Object Model (POM)** design pattern.

### BasePage

`BasePage.ts` contains common reusable browser operations.

Examples:

- Click
- Fill
- Select
- Get text
- Wait for element
- Navigation utilities

### StudentRegistrationFormPage

`StudentRegistrationFormPage.ts` contains page-specific:

- Locators
- Actions
- Form operations
- Validation methods

This keeps test cases clean and separates test logic from page implementation.

---

## Fixtures

The framework uses Playwright fixtures to provide reusable objects to test cases.

Example:

```typescript
test("Validate Page Title Test", async ({ formPage, page }) => {
  const pageTitle = await page.title();

  console.log("Page Title:", pageTitle);

  await expect(page).toHaveTitle("demosite");
});
```

Fixtures help reduce duplicate setup code and improve framework maintainability.

---
