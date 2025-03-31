Feature: Homepage Menu Tabs

  Scenario Outline: User can open and close menu tabs
    Given I open the Home page
    When I click on the "<tab_name>" menu tab
    Then the "<tab_name>" menu should be open
    When I click on the "<tab_name>" menu tab again
    Then the "<tab_name>" menu should be closed

    Examples:
      | tab_name      |
      | Products      |
      | Solutions     |
      | Why Telnyx    |
      | Resources     |
      | Developers    |