# cypress-cucumber-automation-testing

## Summary

This project automates testing for the **Telnyx** website using **Cypress** and **Cucumber**. The test results are generated using **Allure** and deployed to **GitHub Pages** for easy access.

## Test Cases

Test cases for this project are documented in a Google Sheet and can be accessed here:  
[Telnyx Test Cases](https://docs.google.com/spreadsheets/d/1S53S7kRfUVywRq0RM_8eNvMHYaVr4sIMDCBQJwDwYBU/edit?usp=sharing)

## Requirements  

- **Node.js** (version 18 or later)
- **Cypress** (version 10 or later)
- **Allure Commandline** (installed via npm)

## Setup

1. Clone the repository:
    ```bash
    git clone https://github.com/HoliakDenys/cypress-cucumber-automation-testing.git
    cd cypress-cucumber-automation-testing
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Set up your **GitHub Pages**:
   - Ensure that the `gh-pages` branch is set up on your repository for deploying the Allure report.

## Run Tests

1. Run tests using Cypress:
    ```bash
    npx cypress run
    ```

2. Generate Allure Report:
    ```bash
    npm run allure:generate
    ```

## Reporting

- The Allure report is generated after tests are run and deployed to **GitHub Pages**.
- You can view the Allure report here after deployment:  
[Allure Report](https://holiakdenys.github.io/cypress-cucumber-automation-testing/)
