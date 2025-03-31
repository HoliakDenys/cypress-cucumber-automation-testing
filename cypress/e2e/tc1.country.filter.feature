Feature: Validation of country filter in Global Coverage (Number Types tab)

  Scenario: User filters by country in Global Coverage
    Given I open the Global Coverage page
    When I click on the Number Types tab
    And I select "Austria" from the country dropdown
    And I click on the Number Types tab
    Then I should see only "Austria " in the table