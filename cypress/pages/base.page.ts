export default class BasePage {
    public endpoint: string;

    constructor(endpoint: string = '') {
        this.endpoint = endpoint;
    }

    open(): void {
        cy.fixture('endpoints').then((data) => {
            cy.visit(data[this.endpoint]);
        })
    }
}