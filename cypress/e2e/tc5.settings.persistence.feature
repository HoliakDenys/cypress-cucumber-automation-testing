Feature: AI-powered demo settings persistence

  Scenario: Validation of settings persistence for AI-powered demo
    Given I open the Home page
    When I click on the Advanced Settings button
    And I switch the model from "meta-llama/Meta-Llama-3.1-70B-Instruct" to "google/gemma-7b-it"
    And I confirm the changes
    And I click on the Advanced Settings button
    Then I should see the model "google/gemma-7b-it" button visible