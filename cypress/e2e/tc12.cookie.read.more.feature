Feature: Cookie Policy Interaction

  Scenario: Cookie Policy page opens after clicking Read More
    Given I open the Home page 
    When I click the Read More button
    Then the Cookie Policy should be displayed