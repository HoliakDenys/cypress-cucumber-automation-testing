Feature: Validation of anchor links functionality in Resources tab articles

  Scenario Outline: Validate the link "<link_text>"
    Given I open the Resources page
    When I select the article "The future of contact centers: AI adoption guide"
    And I click on the link "<link_text>"
    Then the "<link_text>" section should be in view

  Examples:
    | link_text                                           |
    | Step-by-step guide to AI implementation with Telnyx |
    | How AI technologies enhance contact centers         |
    | Market trends: AI's impact on contact centers       |