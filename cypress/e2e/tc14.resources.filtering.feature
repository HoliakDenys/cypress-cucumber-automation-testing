Feature: Verify filtering functionality on the Resources page

  Scenario: Apply filter for WEBRTC articles
    Given I open the Resources page
    When I select the "WEBRTC" filter
    Then all displayed articles should contain the "WebRTC" criteria