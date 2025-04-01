import BasePage from "./base.page";

export default class HomePage extends BasePage {
    constructor() {
        super('homepage');
    }

    get advancedSettingsButton() {
        return cy.get('button[aria-label="Advanced Settings"]');
    }

    get cookieReadMoreButton() {
        return cy.get('div#onetrust-policy-text a').contains('Read more');
    }

    getMenuTabByText(menuTabName: string) {
        return cy.contains('button[aria-haspopup="menu"] span', menuTabName);
    }

    getLinkByName(linkName: string) {
        return cy.fixture('socialLinks').then((socialLinks) => {
            return cy.get(`a[href="${socialLinks[linkName]}"]`)
        });
    }

    get ConfirmButton() {
        return cy.contains('button', 'Confirm');
    }

    getModelButton(modelName: string) {
        return cy.contains(modelName).closest('button');
    }

    getMenuItemByText(modelName: string) {
        return cy.contains('div[role="menuitem"]', modelName);
    }

    clickAdvancedSettingsButton(): void {
        this.advancedSettingsButton.scrollIntoView().click({ force: true });
    }

    clickMenuTabByText(menuTabName: string) {
        this.getMenuTabByText(menuTabName).click({ force: true });
    }

    switchModel(previousModelName: string, newModelName: string): void {
        this.getModelButton(previousModelName).click({ force: true });
        this.getMenuItemByText(newModelName).click({ force: true });
    }

    clickConfirmButton(): void {
        this.ConfirmButton.click({force: true});
    }

    checkSocialLink(platformName: string) {
        cy.fixture('socialLinks').then((socialLinks) => {
            const url = socialLinks[platformName];
    
            cy.request(url).its('status').should('eq', 200);
    
            this.getLinkByName(platformName)
                .should('have.attr', 'href', url)
                .and('have.attr', 'target');
        });
    }    
    
    clickFooterLinkByText(linkText: string) {
        cy.fixture('footerLinks').then((footerLinks) => {
            const url = footerLinks[linkText];
            if (url)
                cy.get(`a[href="${url}"]`).click({ force: true });
        });
    }

    verifyUrlContains(text: string) {
        cy.url().should('include', text);
        cy.go('back');
    }

    verifyMenuTab(menuTabName: string, ariaExpaned: string, dataState: string) {
        this.getMenuTabByText(menuTabName).parent().should('have.attr', 'aria-expanded', ariaExpaned);
        this.getMenuTabByText(menuTabName).parent().should('have.attr', 'data-state', dataState);
    }
}
