import { When } from '@wdio/cucumber-framework';
import SignUpPage from '../pages/signUp.page';


When('the user signs up with valid details', async function () {
    const signUpData = await SignUpPage.readSignUpData();
    await SignUpPage.enterNumber(signUpData.mobileNumber);
    await SignUpPage.clickLoginSignUpBtn();
    await SignUpPage.uploadProfileImage();
    await SignUpPage.verifyContactNumber(signUpData.mobileNumber);
    await SignUpPage.enterPersonalDetails(signUpData);
    await SignUpPage.enterAddressDetails(signUpData);
    await SignUpPage.submitOtp(signUpData);
})

When('the user deletes their account', async function () {
    const signUpData = await SignUpPage.readSignUpData();
    await SignUpPage.deleteAccount(signUpData.reason);
})
