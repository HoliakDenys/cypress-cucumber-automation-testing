Feature: Validation of language change on "IoT SIM Card"

  Background:
    Given I open the IoT SIM page

  Scenario: Change language to Japanese
    When the user changes the language to Japanese
    Then the language should be changed to Japanese

  Scenario: Change language to Korean
    When the user changes the language to Korean
    Then the language should be changed to Korean

  Scenario: Default language is English
    Then the language should be English by default