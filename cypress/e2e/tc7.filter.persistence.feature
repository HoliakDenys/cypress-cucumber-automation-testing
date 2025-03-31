Feature: Validation of filter persistence in Resources tab after page reload

  Scenario: Validate that selected filters persist after page reload
    Given I open the Resources page
    When I select the "Networking" filter
    And I reload the page
    Then the "Networking" filter should be selected