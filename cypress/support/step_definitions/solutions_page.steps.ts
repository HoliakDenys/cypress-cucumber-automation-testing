import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import SolutionsPage from "../../pages/solutions.page";

const solutionsPage = new SolutionsPage();

Given('I open the Solutions page', () => {
    solutionsPage.open();
});

When('I enter {string} in the search field', (searchText: string) => {
    solutionsPage.enterSearchField(searchText);
});

Then('I should see articles containing {string}', (searchText: string) => {
    solutionsPage.validateArticlesContainSearchText(searchText);
});

Then('I should see a "No results" message', () => {
    solutionsPage.NoResultsMessage.should('be.visible');
});