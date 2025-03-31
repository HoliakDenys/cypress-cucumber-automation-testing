Feature: Search functionality validation in Solution tab

  Scenario: Validation of search functionality when a partial article title is entered
    Given I open the Solutions page
    When I enter "IoT" in the search field
    Then I should see articles containing "IoT"