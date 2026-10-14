import { When, Then } from '@wdio/cucumber-framework';
import { expect } from '@wdio/globals';
import editProfilePage from '../pages/editProfile.page';
import { editProfileData } from '../testData/editProfileData';

When('the user accesses the profile page', async function () {
    await editProfilePage.clickProfileIcon();
});

Then('the profile page should be displayed', async function () {
    const isDisplayed = await editProfilePage.isProfilePageDisplayed();
    await expect(isDisplayed).toBe(true);
});

When('the user updates the profile image using the camera', async function () {
    await editProfilePage.updateProfileImageUsingCamera();
});

Then('the updated profile image should be displayed', async function () {
    const isDisplayed = await editProfilePage.isProfileImageDisplayed();
    await expect(isDisplayed).toBe(true);
});

When('the user updates the profile image from the gallery', async function () {
    await editProfilePage.updateProfileImageFromGallery();
});

When('the user accesses the profile settings page', async function () {
    await editProfilePage.clickProfileSetting();
});

Then('the profile settings page should be displayed', async function () {
    const isDisplayed = await editProfilePage.isProfileSettingsPageDisplayed();
    await expect(isDisplayed).toBe(true);
});

When('the user updates the full name', async function () {
    await editProfilePage.updateFullName(editProfileData.firstName, editProfileData.lastName);
});

Then('the updated full name should be displayed', async function () {
    const isDisplayed = await editProfilePage.verifyFullName();
    await expect(isDisplayed).toBe(true);
});

When('the user updates the address', async function () {
    await editProfilePage.updateAddress(editProfileData.addressLine1, editProfileData.addressLine2, editProfileData.city, editProfileData.pincode);
});

Then('the updated address should be displayed', async function () {
    const isDisplayed = await editProfilePage.isAddressDisplayed();
    await expect(isDisplayed).toBe(true);
});

When('the user updates the email address', async function () {
    await editProfilePage.updateEmail(editProfileData.email);
});

Then('the updated email address should be displayed', async function () {
    const isDisplayed = await editProfilePage.isEmailDisplayed();
    await expect(isDisplayed).toBe(true);
});

When('the user come back to the profile page from edit profile page', async function () {
    await editProfilePage.comeBackToProfilePage();
});

Then('the user should be on the profile page', async function () {
    const isDisplayed = await editProfilePage.isProfilePageDisplayed();
    await expect(isDisplayed).toBe(true);
});