@guestLogin
Feature: Guest user access restrictions and login redirection
  As a guest user,
  I want to explore the Nibav Client Application without logging in,
  So that I can browse available features while being prompted to log in for restricted actions.

  Scenario: Guest user dismisses the login prompt when accessing the profile section
    Given the user is on the login page
    When the user continues as a guest
    Then the user should be navigated to the guest home page
    When the user accesses the profile section
    Then the login required popup should be displayed
    When the user dismisses the popup
    Then the user should remain on the guest home page

  Scenario: Guest user is redirected to the login page after confirming the login prompt from the profile section
    Given the user is on the guest home page
    When the user accesses the profile section
    Then the login required popup should be displayed
    When the user confirms the popup
    Then the user should be navigated to the login page

  Scenario: Guest user is redirected to the login page when attempting to track an order
    Given the user is on the login page
    When the user continues as a guest
    Then the user should be navigated to the guest home page
    When the user accesses Track My Order
    Then the user should be navigated to the login page

  Scenario: Guest user is redirected to the login page when continuing an order through Personalize Home Elevator
    Given the user is on the login page
    When the user continues as a guest
    Then the user should be navigated to the guest home page
    When the user accesses Personalize Home Elevator
    And the user completes the order processing
    And the user continues with the order
    Then the user should be navigated to the login page

  Scenario: Guest user is redirected to the login page when saving an order through Personalize Home Elevator
    Given the user is on the login page
    When the user continues as a guest
    Then the user should be navigated to the guest home page
    When the user accesses Personalize Home Elevator
    And the user completes the order processing
    And the user saves the order
    Then the user should be navigated to the login page

  Scenario: Guest user is redirected to the login page when placing an order from the series selection menu
    Given the user is on the login page
    When the user continues as a guest
    Then the user should be navigated to the guest home page
    When the user opens the series selection menu
    And the user selects a series
    And the user completes the order processing
    And the user continues with the order
    Then the user should be navigated to the login page

  Scenario Outline: Guest user is redirected to the login page when placing a custom order through <series>
    Given the user is on the login page
    When the user continues as a guest
    Then the user should be navigated to the guest home page
    When the user views the "<series>" details
    And the user selects Custom Order
    And the user completes the order processing
    And the user continues with the order
    Then the user should be navigated to the login page

    Examples:
      | series        |
      | Series IV Max |
      | Series V Max  |