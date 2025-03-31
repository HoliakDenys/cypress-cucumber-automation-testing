import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import ResourcesPage from "../../pages/resources.page";

const resourcesPage = new ResourcesPage();

Given('I open the Resources page', () => {
    resourcesPage.open();
});

When('I select the {string} filter', (filterName: string) => {
    resourcesPage.selectFilterByName(filterName);
});

When('I reload the page', () => {
    cy.reload();
});

When('I select the article {string}', (articleName: string) => {
    resourcesPage.selectArticleByText(articleName);
});

When('I click on the link {string}', (anchorLinkName: string) => {
    resourcesPage.selectAnchorLinkByText(anchorLinkName);
});

When('I enter {string} into the search field', (searchQuery: string) => {
    resourcesPage.enterSearchField(searchQuery);
});

Then('the search results should display only one article titled {string}', (title: string) => {
    resourcesPage.getArticleByText(title).should('be.visible');
});

Then('the {string} filter should be selected', (filterName: string) => {
    resourcesPage.checkFilterStateAfterReload(filterName);
});

Then('the {string} section should be in view', (sectionName: string) => {
    resourcesPage.verifyElementInViewByText(sectionName);
});

Then('all displayed articles should contain the {string} criteria', (filterName: string) => {
    resourcesPage.checkFilterVisibility(filterName);
});