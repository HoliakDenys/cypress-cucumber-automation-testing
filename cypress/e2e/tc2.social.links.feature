Feature: Home Page Social Link Validation

  Scenario: Validation of LinkedIn social link on the Home Page
    Given I open the Home page
    When I click the "LinkedIn" social link
    Then The "LinkedIn" link should be valid and redirect correctly