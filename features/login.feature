Feature: Nibav Client App Login and Logout Functionality
  As a registered user,
  I want to be able to log in to the Nibav Client Application
  so that I can access application features and securely log out.

  @login
  Scenario: User opens the app, logs in, and verifies the home page
    Given the user is on the login page
    When the user logs in with mobile number and OTP
    Then the user should be navigated to the home page

  @logout
  Scenario: User logsout
    Given the user is on the Homepage
    When the user navigate to profile page and logs out
    Then the user should be navigated to the login page