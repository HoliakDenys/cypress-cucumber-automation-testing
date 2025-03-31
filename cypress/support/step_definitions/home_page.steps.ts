import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import HomePage from "../../pages/home.page";

const homepage = new HomePage();

Given("I open the Home page", () => {
    homepage.open();
});

When("I click the {string} social link", (linkName: string) => {
    homepage.clickFooterLinkByText(linkName);
});

When ("I click on the Advanced Settings button", () => {
    homepage.clickAdvancedSettingsButton();
});

When('I switch the model from {string} to {string}', (oldModel: string, newModel: string) => {
    homepage.switchModel(oldModel, newModel);
});

When("I confirm the changes", () => {
    homepage.clickConfirmButton();
});

When('the user clicks on the {string} footer link', (linkName: string) => {
    homepage.clickFooterLinkByText(linkName);
});

When('I click the Read More button', () => {
    homepage.cookieReadMoreButton.click({ force: true });
});

When('I click on the {string} menu tab', (menuTabName: string) => {
    homepage.clickMenuTabByText(menuTabName);
});

When('I click on the {string} menu tab again', (menuTabName: string) => {
    homepage.clickMenuTabByText(menuTabName);
});

Then('I should see the model {string} button visible', (model: string) => {
    homepage.getModelButton(model).scrollIntoView().should('be.visible');
});

Then('the URL should contain {string}', (urlName: string) => {
    homepage.verifyUrlContains(urlName);
});

Then("The {string} link should be valid and redirect correctly", (linkName: string) => {
    homepage.checkSocialLink(linkName);
});

Then('the Cookie Policy should be displayed', () => {
    cy.url().should('include', 'cookie-policy')
});

Then('the {string} menu should be open', (menuTabName: string) => {
    homepage.verifyMenuTab(menuTabName, 'true', 'open');
});

Then('the {string} menu should be closed', (menuTabName: string) => {
    homepage.verifyMenuTab(menuTabName, 'false', 'closed');
});