Feature: FAQ section on IoT Sim Page

  Background:
    Given I open the IoT SIM page

  Scenario: Verify "Do Telnyx IoT SIMs support voice?" FAQ section expands and collapses correctly
    When I click on the "Do Telnyx IoT SIMs support voice?" button
    Then the answer for "Do Telnyx IoT SIMs support voice?" should expand
    And I click on the "Do Telnyx IoT SIMs support voice?" button
    Then the answer for "Do Telnyx IoT SIMs support voice?" should collapse