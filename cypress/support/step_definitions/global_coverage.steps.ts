import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import GlobalCoveragePage from "../../pages/global.coverage.page";

const globalCoveragePage = new GlobalCoveragePage();

Given("I open the Global Coverage page", () => {
  globalCoveragePage.open();
});

When("I click on the Number Types tab", () => {
  globalCoveragePage.clickNumberTypesButton();
});

When("I select {string} from the country dropdown", (country: string) => {
  globalCoveragePage.selectCountryFromDropdown(country);
});

Then("I should see only {string} in the table", (country: string) => {
  globalCoveragePage.CoverageTableNumberTypesTab
    .find("tr")
    .should("have.length", 1)
    .should("have.text", country);
});

Then('I should be able to verify filtering and reset functionality if I selected {string} from the country dropdown', (country: string) => {
  globalCoveragePage.verifyFilteringAndReset(country);
});