Feature: Validate footer links on Telnyx homepage

  Scenario Outline: Validate "<link_text>" footer link
    Given I open the Home page
    When the user clicks on the "<link_text>" footer link
    Then the URL should contain "<expected_url>"

  Examples:
    | link_text                        | expected_url                            |
    | Telnyx vs. Twilio                | the-better-twilio-alternative           |
    | Telnyx vs. Bandwidth             | the-better-bandwidth-alternative        |
    | Telnyx vs. Kore Wireless         | the-better-kore-wireless-alternative    |
    | Telnyx vs. Hologram              | the-better-hologram-alternative         |
    | Telnyx vs. Vonage                | the-better-vonage-voice-api-alternative |
    | Telnyx vs. Amazon S3             | the-better-amazon-s3-alternative        |