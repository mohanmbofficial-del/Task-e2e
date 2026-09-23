import { Given, When, Then } from '@wdio/cucumber-framework';
import GuestLogin from '../pages/guestLogin.page';

Given('the user is on the guest home page', async function () {
    const isDisplayed = await GuestLogin.isGuestHomePageDisplayed();
    await expect(isDisplayed).toBe(true);
});

When('the user clicks the continue as guest button', async function () {
    await GuestLogin.clickContinueAsGuest();
});

Then('the user should be navigated to the guest home page', async function () {
    const isDisplayed = await GuestLogin.isGuestHomePageDisplayed();
    await expect(isDisplayed).toBe(true);
});

When('the user clicks the profile icon', async function () {
    await GuestLogin.clickProfileIcon();
});

Then('the login required popup should be displayed', async function () {
    const isDisplayed = await GuestLogin.isPopupMessageDisplayed();
    await expect(isDisplayed).toBe(true);
});


When('the user clicks the cancel button on the popup', async function () {
    await GuestLogin.clickCancelBtn();
});

Then('the user should remain on the guest home page', async function () {
    const isDisplayed = await GuestLogin.isGuestHomePageDisplayed();
    await expect(isDisplayed).toBe(true);
});

When('the user clicks the yes button on the popup', async function () {
    await GuestLogin.clickYesBtn();
});


When('the user clicks the track my order button', async function () {
    await GuestLogin.clickTrackMyOrder();
});


When('the user clicks the personalize home elevator button', async function () {
    await GuestLogin.clickPersonalizeHomeElevator();
});

When('the user proceeds to place an order', async function () {
    if (await GuestLogin.isGuestHomePageDisplayed()) {
        await GuestLogin.clickHumburgerBtn();
        await GuestLogin.clickSeriesVOrderBtn();
        await GuestLogin.clickUpArrowBtn();
    } else {
        await GuestLogin.clickUpArrowBtn();
    }
});
When('the user clicks the continue button', async function () {
    await GuestLogin.clickContinueBtn();
});
When('the user clicks the save order button', async function () {
    await GuestLogin.clickSaveBtn();
});

When('the user clicks the top right menu button', async function () {
    await GuestLogin.clickHumburgerBtn();
});

When('the user selects any series from the series options popup', async function () {
    await GuestLogin.clickSeriesVOrderBtn();
});

When('the user clicks the learn more button in Series IV Max section', async function () {
    await GuestLogin.clickSeriesIVLearnMoreBtn();
});


When('the user clicks the learn more button in Series V Max section', async function () {
    await GuestLogin.clickSeriesVLearnMoreBtn();
});

When('the user clicks the custom order button', async function () {
    await GuestLogin.clickCustomOrderBtn();
});