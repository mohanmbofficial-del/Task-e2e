@editProfile

Feature: Edit profile information

As a registered user of the Nibav Client Application,
I want to update my profile details,
So that my profile information remains accurate and up to date.

Scenario: User updates profile image and profile information
Given the user is on the login page
When the user logs in with mobile number and OTP
Then the user should be navigated to the home page
When the user accesses the profile page
Then the profile page should be displayed

When the user updates the profile image using the camera
Then the updated profile image should be displayed

When the user updates the profile image from the gallery
Then the updated profile image should be displayed

When the user accesses the profile settings page
Then the profile settings page should be displayed

When the user updates the full name
Then the updated full name should be displayed

When the user updates the address
Then the updated address should be displayed

When the user updates the email address
Then the updated email address should be displayed