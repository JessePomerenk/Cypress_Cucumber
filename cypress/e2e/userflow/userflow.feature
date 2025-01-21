Feature: Search Bar
  Scenario Outline: User is able to search for '<item>'
    Given User is on the home page
    When They search for '<item>'
    Then They should see a link to '<link>'

    Examples:
      | item               | link                           |
      | foundation finance | https://foundationfinance.com/ |
