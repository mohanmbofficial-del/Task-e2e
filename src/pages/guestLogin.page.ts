import BasePage from "./base.page";
import { GUEST_LOGIN_SELECTORS } from "../selectors/guestLoginSelectors";
import { SIGN_UP_SELECTORS } from "../selectors/signUpSelectors";

class GuestLogin extends BasePage {
    private get continueAsGuestBtn() { return $(GUEST_LOGIN_SELECTORS.CONTINUE_AS_GUEST_BTN); }
    private get guestHomePageText() { return $(GUEST_LOGIN_SELECTORS.GUEST_HOME_PAGE_TEXT); }
    private get personalizeHomeElevatorBtn() { return $(GUEST_LOGIN_SELECTORS.PERSONALIZE_HOME_ELEVATOR_BTN); }
    private get trackMyOrderBtn() { return $(GUEST_LOGIN_SELECTORS.TRACK_MY_ORDER_BTN); }
    private get profileIcon() { return $(SIGN_UP_SELECTORS.MY_PROFILE_ICON); }
    private get popupMessage() { return $(GUEST_LOGIN_SELECTORS.POPUP_MESSAGE); }
    private get cancelBtn() { return $(GUEST_LOGIN_SELECTORS.CANCEL_BTN); }
    private get yesBtn() { return $(GUEST_LOGIN_SELECTORS.YES_BTN); }
    private get humburgerBtn() { return $(GUEST_LOGIN_SELECTORS.HAMBURGER_BTN); }
    private get seriesVOrderBtn() { return $(GUEST_LOGIN_SELECTORS.SERIES_V_ORDER_BTN); }
    private get upArrowBtn() { return $(GUEST_LOGIN_SELECTORS.UP_ARROW_BTN); }
    private get saveBtn() { return $(GUEST_LOGIN_SELECTORS.SAVE_BTN); }
    private get continueBtn() { return $(GUEST_LOGIN_SELECTORS.CONTINUE_BTN); }
    private get loginSignUpBtn() { return $(GUEST_LOGIN_SELECTORS.LOGIN_SIGN_UP_BUTTON); }
    private get seriesIVLearnMoreBtn() { return $(GUEST_LOGIN_SELECTORS.SERIES_IV_LEARN_MORE_BTN); }
    private get seriesVLearnMoreBtn() { return $(GUEST_LOGIN_SELECTORS.SERIES_V_LEARN_MORE_BTN); }
    private get customOrderBtn() { return $(GUEST_LOGIN_SELECTORS.CUSTOM_ORDER_BTN); }

    async clickContinueAsGuest() {
        await this.click(this.continueAsGuestBtn);
    }

    async clickPersonalizeHomeElevator() {
        await this.click(this.personalizeHomeElevatorBtn);
    }

    async clickTrackMyOrder() {
        await this.click(this.trackMyOrderBtn);
    }

    async isGuestHomePageDisplayed(): Promise<boolean> {
        try {
            return await this.guestHomePageText.isDisplayed();
        } catch {
            return false;
        }
    }

    async clickProfileIcon() {
        await this.click(this.profileIcon);
    }

    async isPopupMessageDisplayed(): Promise<boolean> {
        try {
            await this.popupMessage.waitForDisplayed();
            return await this.popupMessage.isDisplayed();
        } catch {
            return false;
        }
    }

    async clickCancelBtn() {
        await this.click(this.cancelBtn);
    }

    async clickYesBtn() {
        await this.click(this.yesBtn);
    }

    async clickHamburgerBtn() {
        await this.click(this.humburgerBtn);
    }

    async clickSeriesVOrderBtn() {
        await this.click(this.seriesVOrderBtn);
    }

    async clickUpArrowBtn() {
        await this.click(this.upArrowBtn);
    }

    async clickSaveBtn() {
        await this.click(this.saveBtn);
    }

    async clickContinueBtn() {
        await this.click(this.continueBtn);
    }

    async clickLoginSignUpBtn() {
        await this.click(this.loginSignUpBtn);
    }

    async clickSeriesIVLearnMoreBtn() {
        await this.click(this.seriesIVLearnMoreBtn);
    }

    async clickSeriesVLearnMoreBtn() {
        await this.click(this.seriesVLearnMoreBtn);
    }

    async clickCustomOrderBtn() {
        await this.click(this.customOrderBtn);
    }
}

export default new GuestLogin();