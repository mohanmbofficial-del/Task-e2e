import { $ } from '@wdio/globals';
import BasePage from './base.page';
import LoginPage from './login.page';
import { signUpData } from '../testData/signUpData';
import { LOGIN_SELECTORS } from '../selectors/loginSelectors';
import { SIGN_UP_SELECTORS } from '../selectors/signUpSelectors';   



class SignUpPage extends BasePage {
    private get enterContactNumber() { return $(LOGIN_SELECTORS.MOBILE_NUMBER) }
    private get loginSignUpButton() { return $(LOGIN_SELECTORS.LOGIN_BUTTON); }
    private get profileImage() { return $(SIGN_UP_SELECTORS.PROFILE_IMAGE); }
    private get doneButton() { return $(SIGN_UP_SELECTORS.DONE_BUTTON); }
    private get testImage() { return $(SIGN_UP_SELECTORS.TEST_IMAGE); }
    private get firstNameInput() { return $(SIGN_UP_SELECTORS.FIRST_NAME); }
    private get lastNameInput() { return $(SIGN_UP_SELECTORS.LAST_NAME); }
    private get contactNumberInput() { return $(SIGN_UP_SELECTORS.CONTACT_NUMBER); }
    private get emailInput() { return $(SIGN_UP_SELECTORS.EMAIL); }
    private get nextButton() { return $(SIGN_UP_SELECTORS.NEXT_BUTTON); }
    private get addressLine1Input() { return $(SIGN_UP_SELECTORS.ADDRESS_LINE_1); }
    private get addressLine2Input() { return $(SIGN_UP_SELECTORS.ADDRESS_LINE_2); }
    private get pinCodeInput() { return $(SIGN_UP_SELECTORS.PINCODE); }
    private get verifyMyAccountButton() { return $(SIGN_UP_SELECTORS.VERIFY_MY_ACCOUNT_BUTTON); }
    private get otpInput() { return $(SIGN_UP_SELECTORS.SIGN_UP_OTP_FIELD); }
    private get submitOtpButton() { return $(SIGN_UP_SELECTORS.SIGN_UP_SUBMIT_BUTTON); }
    private get resendOtpButton() { return $(SIGN_UP_SELECTORS.RESEND_OTP_BUTTON); }
    private get myProfileIcon() { return $(SIGN_UP_SELECTORS.MY_PROFILE_ICON); }
    private get settingsButton() { return $(SIGN_UP_SELECTORS.SETTINGS); }
    private get deleteMyAccountButton() { return $(SIGN_UP_SELECTORS.DELETE_MY_ACCOUNT); }
    private get confirmDeleteButton() { return $(SIGN_UP_SELECTORS.YES_BUTTON); }
    private get reasonInput() { return $(SIGN_UP_SELECTORS.REASON_INPUT); }
    private get submitDeleteAccount() { return $(SIGN_UP_SELECTORS.SUBMIT_BUTTON); }

    async readSignUpData(): Promise<any> {
        return signUpData
    }

    async enterNumber(contactNumber: String): Promise<void> {
        await this.click(this.enterContactNumber);
        await this.setValue(this.enterContactNumber, String(contactNumber));
    }

    async clickLoginSignUpBtn(): Promise<void> {
        await this.click(this.loginSignUpButton)
    }

    async uploadProfileImage(): Promise<void> {
        await this.profileImage.waitForDisplayed()
        await this.click(this.profileImage);
        await this.testImage.waitForDisplayed()
        await this.click(this.testImage)
        await this.doneButton.waitForDisplayed()
        await this.click(this.doneButton)
    }

    async verifyContactNumber(expectedNumber: string): Promise<void> {
        await expect(this.contactNumberInput).toHaveText(expectedNumber);
    }

    async enterPersonalDetails(signUp: any): Promise<void> {
        await this.setValue(this.firstNameInput, signUp.firstName);
        await this.setValue(this.lastNameInput, signUp.lastName);
        await this.closeKeyboard();
        await this.setValue(this.emailInput, signUp.emailId);
        await this.closeKeyboard();
        await this.click(this.nextButton);
    }

    async enterAddressDetails(signUp: any): Promise<void> {
        await this.click(this.addressLine1Input)
        await this.setValue(this.addressLine1Input, signUp.al1);
        await this.closeKeyboard();
        await this.click(this.addressLine2Input)
        await this.setValue(this.addressLine2Input, signUp.al2);
        await this.closeKeyboard();
        await this.scrollDown();
        await this.click(this.pinCodeInput);
        await this.pinCodeInput.clearValue();
        await this.setValue(this.pinCodeInput, signUp.pinCode);
        await this.closeKeyboard();
        await this.click(this.verifyMyAccountButton);
    }

    async submitOtp(signUp: any): Promise<void> {
        await this.setValue(this.otpInput, signUp.otp);
        await this.click(this.submitOtpButton);
    }

    async resendOtp(): Promise<void> {
        await this.click(this.resendOtpButton);
    }

    async deleteAccount(reason: string): Promise<void> {
        await this.click(this.myProfileIcon);
        await this.click(this.settingsButton);
        await this.scrollDown();
        await this.click(this.deleteMyAccountButton);
        await this.click(this.confirmDeleteButton);
        await this.setValue(this.reasonInput, reason);
        await this.click(this.submitDeleteAccount);
    }

    async isOnLoginPage(): Promise<boolean> {
        return LoginPage.isInLoginPage();
    }
}

export default new SignUpPage();
