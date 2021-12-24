# Cypress-Cucumber-Tests

This Cypress based sample tests project is implemented with the help of TypeScript and uses page-object model as the design pattern with BDD approach.

**Folder Structure:**

```

├── cypress
│   └── specs (feature files)
|   └── step-definitions (tests code)
│   └── ui-identifiers (page objects)
│   └── screenshots (capture screenshot on failure)
└── cypress.json (cypress global configuration)

```

**Salient Features:**

- Based on POM design pattern.
- Has the capability to run on various viewports such as desktop, tablet and mobile.
- Based on Cucumber / Gherkin standard.
- Cross-browser platform.
- Fully automated and provide console tests report.
- Ability to take screenshot on failure.

**Installation**:

- Clone the project
- Open terminal and run `npm install`

**Running tests**:

- Open terminal, run `npm run cy:open` to run tests in headed mode or run `npm run cy:run` to run in headless mode

Once the execution is complete, this is how the test report would look like,

<ins>Console</ins>:

<kbd><img src="https://user-images.githubusercontent.com/58862186/147334078-ccd58703-f746-4d64-abdd-8987fc5e7640.png" alt="Console Report" border="1" width=800></kbd>
