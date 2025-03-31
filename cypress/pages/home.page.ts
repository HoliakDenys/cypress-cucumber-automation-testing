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

    getLinkedInLink() {
        return cy.fixture('socialLinks').then((socialLinks) => {
            const linkedInUrl = socialLinks.LinkedIn;
            return cy.get(`a[href="${linkedInUrl}"]`);
        });
    }
    
    getTwitterLink() {
        return cy.fixture('socialLinks').then((socialLinks) => {
            const twitterUrl = socialLinks.Twitter;
            return cy.get(`a[href="${twitterUrl}"]`);
        });
    }
    
    getFacebookLink() {
        return cy.fixture('socialLinks').then((socialLinks) => {
            const facebookUrl = socialLinks.Facebook;
            return cy.get(`a[href="${facebookUrl}"]`);
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
        this.advancedSettingsButton.click({ force: true });
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
    
            let socialLink;
            switch (platformName.toLowerCase()) {
                case 'linkedin':
                    socialLink = this.getLinkedInLink();
                    break;
                case 'facebook':
                    socialLink = this.getFacebookLink();
                    break;
                case 'twitter':
                    socialLink = this.getTwitterLink();
                    break;
                default:
                    return;
            }
    
            socialLink
                .should('have.attr', 'href', url)
                .invoke('removeAttr', 'target');
            socialLink.click();
    
            cy.origin(url, { args: { platformName, url } }, ({ platformName }) => {
                cy.url().should('include', platformName.toLowerCase());
            });
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
