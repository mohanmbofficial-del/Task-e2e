import { Given, When, Then, } from '@wdio/cucumber-framework';
import { expect } from '@wdio/globals';
import GuestLogin from '../pages/guestLogin.page';


Given('the user is on the guest home page', async function () {
    const isDisplayed = await GuestLogin.isGuestHomePageDisplayed();
    await expect(isDisplayed).toBe(true);
});

When('the user continues as a guest', async function () {
    await GuestLogin.clickContinueAsGuest();
});

Then('the user should be navigated to the guest home page', async function () {
    const isDisplayed = await GuestLogin.isGuestHomePageDisplayed();
    await expect(isDisplayed).toBe(true);
});

When('the user accesses the profile section', async function () {
    await GuestLogin.clickProfileIcon();
});

Then('the login required popup should be displayed', async function () {
    const isDisplayed = await GuestLogin.isPopupMessageDisplayed();
    await expect(isDisplayed).toBe(true);
});

When('the user dismisses the popup', async function () {
    await GuestLogin.clickCancelBtn();
});

Then('the user remains on the guest home page', async function () {
    const isDisplayed = await GuestLogin.isGuestHomePageDisplayed();
    await expect(isDisplayed).toBe(true);
});

When('the user confirms the popup', async function () {
    await GuestLogin.clickYesBtn();
});

When('the user accesses Track My Order', async function () {
    await GuestLogin.clickTrackMyOrder();
});

When('the user accesses Personalize Home Elevator', async function () {
    await GuestLogin.clickPersonalizeHomeElevator();
});

When('the user expands the order configuration drawer', async function () {
    await GuestLogin.clickUpArrowBtn();
});

When('the user continues with the order', async function () {
    await GuestLogin.clickContinueBtn();
});

When('the user saves the order', async function () {
    await GuestLogin.clickSaveBtn();
});

When('the user opens the series selection menu', async function () {
    await GuestLogin.clickHamburgerBtn();
});

When('the user selects a series', async function () {
    await GuestLogin.clickSeriesVOrderBtn();
});

When('the user views the {string} details', async function (series: string) {
    if (series.includes('IV')) {
        await GuestLogin.clickSeriesIVLearnMoreBtn();
    } else if (series.includes('V')) {
        await GuestLogin.clickSeriesVLearnMoreBtn();
    } else {
        throw new Error(`Unsupported series: ${series}`);
    }
});

When('the user selects Custom Order', async function () {
    await GuestLogin.clickCustomOrderBtn();
});