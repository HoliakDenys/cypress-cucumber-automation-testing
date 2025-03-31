import BasePage from "./base.page";

export default class SolutionsPage extends BasePage {
    constructor() {
        super('solutions');
    }

    get SearchField() {
        return cy.get('#search');
    }

    get NoResultsMessage() {
        return cy.contains('p', 'No results for this filter');
    }

    enterSearchField(query: string) {
        this.SearchField
            .clear()
            .type(`${query}{enter}`);

        cy.wait(500);
    }
    
    validateArticlesContainSearchText(query: string) {
        cy.get('li')
            .contains('h3', query)
            .each(($el) => { 
                cy.wrap($el).should('include.text', query);
            });
    }
}