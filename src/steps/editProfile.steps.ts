import { When, Then } from '@wdio/cucumber-framework';
import { expect } from '@wdio/globals';
import editProfilePage from '../pages/editProfile.page';

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
    await editProfilePage.updateFullName('Bhagyesh', 'Makasare');
});

Then('the updated full name should be displayed', async function () {
    const isDisplayed = await editProfilePage.verifyFullName();
    await expect(isDisplayed).toBe(true);
});

When('the user updates the address', async function () {
    await editProfilePage.updateAddress('Street 1', 'Area 2', 'Pune', '411001');
});

Then('the updated address should be displayed', async function () {
    const isDisplayed = await editProfilePage.isAddressDisplayed();
    await expect(isDisplayed).toBe(true);
});

When('the user updates the email address', async function () {
    await editProfilePage.updateEmail('tester@gmail.com');
});

Then('the updated email address should be displayed', async function () {
    const isDisplayed = await editProfilePage.isEmailDisplayed();
    await expect(isDisplayed).toBe(true);
});