Feature: Nibav Client App - Sign Up and Delete Account

  @signUpAndDelete
  Scenario: User signs up and deletes account
    Given the user is on the login page
    When the user signs up with valid details
    Then the user should be navigated to the home page
    When the user deletes their account
    Then the user should be navigated to the login page