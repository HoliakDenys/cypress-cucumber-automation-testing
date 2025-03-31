Feature: Search functionality validation in Solutions tab

  Scenario: Validation of search functionality when a non-existent article title is entered
    Given I open the Solutions page
    When I enter "Callback" in the search field
    Then I should see a "No results" message