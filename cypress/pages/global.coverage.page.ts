import BasePage from "./base.page";

export default class GlobalCoveragePage extends BasePage {
    
    constructor() {
        super('globalCoverage');
    }

    get NumberTypesButton() {
        return cy.xpath("//button[@role='tab' and contains(text(), 'Number types')]");
    }
    
    get SearchCountryButton() {
        return cy.contains('button', 'Search country');
    }

    get FilterSelectedButton() {
        return cy.contains('span', '1 filter selected').closest('button');
    }

    get CoverageTableNumberTypesTab() {
        return cy.get('table tbody');
    }

    get ResetFiltersButton() {
        return cy.contains('button', 'Reset filters');
    }

    clickNumberTypesButton(): void {
        this.NumberTypesButton.click({force: true});
    }

    selectCountryFromDropdown(countryName: string): void {
        this.SearchCountryButton.click();
        const countryCheckboxSelector = `//div[@role='menuitemcheckbox']//span[text()='${countryName}']/preceding-sibling::input[@type='checkbox']`;
        cy.xpath(countryCheckboxSelector).click();

    }

    verifyFilteringAndReset(country: string) {
        this.CoverageTableNumberTypesTab
            .find('tr')
            .then(($buttonsBefore) => {
                const initialCount = $buttonsBefore.length;

                this.selectCountryFromDropdown(country);
                this.clickNumberTypesButton();

                this.CoverageTableNumberTypesTab
                    .find('tr')
                    .should('have.length', 1);

                this.ResetFiltersButton.click({force: true});

                this.CoverageTableNumberTypesTab
                    .find('tr')
                    .should('have.length', initialCount);
            });
    }
}