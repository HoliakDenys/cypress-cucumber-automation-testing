Feature: Validation of search functionality on the Resource page

  Scenario: Search for an article by partial title
    Given I open the Resources page
    When I enter "Choosing the best phone number" into the search field
    Then the search results should display only one article titled "Choosing the best phone number"