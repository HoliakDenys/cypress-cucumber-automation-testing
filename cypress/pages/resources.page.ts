import BasePage from "./base.page";

export default class ResourcesPage extends BasePage {
    constructor() {
        super('resources');
    }

    getFilterLinkByName(filterName: string) {
        return cy.get(`a[href*="/resources/topic/${filterName.toLowerCase()}"]`);
    }

    get SearchField() {
        return cy.get('input#search');
    }

    selectFilterByName(filterName: string) {
        this.getFilterLinkByName(filterName)
            .click({ force: true });
        cy.wait(500);
    }

    getArticleByText(text: string) {
        return cy.contains('li', text);
    }

    checkFilterStateAfterReload(filterName: string) {
        cy.get('a[href="/resources"')
            .find('div')
            .should('have.attr', 'data-state', 'checked');
    }

    selectArticleByText(text: string) {
        this.getArticleByText(text).click();
    }

    selectLinkByText(text: string) {
        cy.contains('a', text).click({ force: true });
    }

    verifyElementInViewByText(headerText: string) {
        cy.contains('h2', headerText)
            .then(($el) => {
                const rect = $el[0].getBoundingClientRect();
                cy.wrap(rect.top).should('be.greaterThan', 0);
            });
        cy.scrollTo('top');
    }

    selectAnchorLinkByText(text: string) {
        this.selectLinkByText(text);
    }

    enterSearchField(query: string) {
        this.SearchField
            .clear()
            .type(`${query}{enter}`);
    }

    checkFilterVisibility(filterName: string) {
        cy.get('li a[href*="resources/"]').each(($el) => {
            cy.wrap($el).find('strong').should('have.text', filterName)
                .then(($strong) => {
                    if ($strong.length > 0) {
                        cy.wrap($el).should('be.visible');
                    }
                });
        });
    }
}
