Feature: Foundation Finance
  Scenario Outline: Careers Page shows '5' steps
    Given User is on the FFC home page
    When They click on the "Careers" button in the "About Us" menu
    Then The should see 5 steps
