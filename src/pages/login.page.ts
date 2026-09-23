import { $ } from '@wdio/globals'
import BasePage from './base.page';
import { LOGIN_SELECTORS } from '../selectors/loginSelectors';
import { loginData } from '../testData/loginData';


class LoginPage extends BasePage {

    private get contactNumberInputField() { return $(LOGIN_SELECTORS.MOBILE_NUMBER);}
    private get btnloginSignUp() { return $(LOGIN_SELECTORS.LOGIN_BUTTON);}
    private get otpInputField() { return $(LOGIN_SELECTORS.OTP_FIELD);}
    private get btnSubmit() { return $(LOGIN_SELECTORS.SUBMIT_BUTTON);}
    private get personaliseHomeElevatorText() { return $(LOGIN_SELECTORS.PERSONALISE_HOME_ELEVATOR);}

    async readLoginData(): Promise<any> { return loginData; }

    async isInLoginPage(): Promise<boolean> { 
        await this.btnloginSignUp.waitForDisplayed();
        const isLogoDisplayed = await this.btnloginSignUp.isDisplayed();
        return isLogoDisplayed;
    }

    async login(contactNumber: string, otp: string) {
        await this.click(this.contactNumberInputField);
        await this.setValue(this.contactNumberInputField, String(contactNumber));
        await this.closeKeyboard();
        await this.click(this.btnloginSignUp);
        await this.click(this.otpInputField);        
        await this.setValue(this.otpInputField, String(otp));
        await this.closeKeyboard();
        await this.click(this.btnSubmit);
    }

    async verifyHomePage(text: string): Promise<boolean> {
        const personaliseText = await this.personaliseHomeElevatorText.getAttribute('content-desc');
        return personaliseText === text;
    }
}

export default new LoginPage();