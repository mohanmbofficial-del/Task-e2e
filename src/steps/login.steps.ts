import { Given, When, Then } from '@wdio/cucumber-framework';
import { expect } from '@wdio/globals';
import LoginPage from '../pages/login.page';
import LogoutPage from '../pages/logout.page';
import { loginData } from '../testData/loginData';

Given('the user is on the login page', async function () {
    const isInLoginPage = await LoginPage.isInLoginPage();
    await expect(isInLoginPage).toBe(true);
});

When('the user logs in with mobile number and OTP', async function () {
    const loginData = await LoginPage.readLoginData();
    await LoginPage.login(loginData.mobileNumber, loginData.otp);
});

Then('the user should be navigated to the home page', async function () {
    const isVerify = await LoginPage.verifyHomePage(loginData.homePageTxt);
    await expect(isVerify).toBe(true);
});

Given('the user is on the Homepage', async function () {
    const isVerify = await LoginPage.verifyHomePage(loginData.homePageTxt);
    await expect(isVerify).toBe(true);
});

When('the user navigate to profile page and logs out', async function () {
    await LogoutPage.logOut();
});

Then('the user should be navigated to the login page', async function () {
    const isInLoginPage = await LoginPage.isInLoginPage();
    await expect(isInLoginPage).toBe(true);
});
