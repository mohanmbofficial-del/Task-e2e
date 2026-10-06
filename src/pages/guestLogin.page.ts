import BasePage from "./base.page";
import { GUEST_LOGIN_SELECTORS } from "../selectors/guestLoginSelectors";

class GuestLogin extends BasePage {
    private get continueAsGuestBtn() { return $(GUEST_LOGIN_SELECTORS.CONTINUE_AS_GUEST_BTN); }
    private get guestHomePageText() { return $(GUEST_LOGIN_SELECTORS.GUEST_HOME_PAGE_TEXT); }
    private get personalizeHomeElevatorBtn() { return $(GUEST_LOGIN_SELECTORS.PERSONALIZE_HOME_ELEVATOR_BTN); }
    private get trackMyOrderBtn() { return $(GUEST_LOGIN_SELECTORS.TRACK_MY_ORDER_BTN); }
    private get profileIcon() { return $(GUEST_LOGIN_SELECTORS.PROFILE_ICON); }
    private get popupMessage() { return $(GUEST_LOGIN_SELECTORS.POPUP_MESSAGE); }
    private get cancelBtn() { return $(GUEST_LOGIN_SELECTORS.CANCEL_BTN); }
    private get yesBtn() { return $(GUEST_LOGIN_SELECTORS.YES_BTN); }
    private get hamburgerBtn() { return $(GUEST_LOGIN_SELECTORS.HAMBURGER_BTN); }
    private get seriesVOrderBtn() { return $(GUEST_LOGIN_SELECTORS.SERIES_V_ORDER_BTN); }
    private get upArrowBtn() { return $(GUEST_LOGIN_SELECTORS.UP_ARROW_BTN); }
    private get saveBtn() { return $(GUEST_LOGIN_SELECTORS.SAVE_BTN); }
    private get continueBtn() { return $(GUEST_LOGIN_SELECTORS.CONTINUE_BTN); }
    private get seriesIVLearnMoreBtn() { return $(GUEST_LOGIN_SELECTORS.SERIES_IV_LEARN_MORE_BTN); }
    private get seriesVLearnMoreBtn() { return $(GUEST_LOGIN_SELECTORS.SERIES_V_LEARN_MORE_BTN); }
    private get customOrderBtn() { return $(GUEST_LOGIN_SELECTORS.CUSTOM_ORDER_BTN); }

    async clickContinueAsGuest() {
        try { await this.click(this.continueAsGuestBtn);
        } catch (error) { console.error("Error in clickContinueAsGuest:", error); throw error;
        }
    }

    async isContinueAsGuestBtnDisplayed(): Promise<boolean> {
        try { await this.continueAsGuestBtn.waitForDisplayed({ timeout: 10000 });
            return await this.isElementDisplayed(this.continueAsGuestBtn);
        } catch (error) { console.error("Error in isContinueAsGuestBtnDisplayed:", error); return false;
        }
    }

    async clickPersonalizeHomeElevator() {
        try { await this.click(this.personalizeHomeElevatorBtn);
        } catch (error) { console.error("Error in clickPersonalizeHomeElevator:", error); throw error;
        }
    }

    async clickTrackMyOrder() {
        try { await this.click(this.trackMyOrderBtn);
        } catch (error) { console.error("Error in clickTrackMyOrder:", error); throw error;
        }
    }

    async isGuestHomePageDisplayed(): Promise<boolean> {
        try { await this.guestHomePageText.waitForDisplayed({ timeout: 10000 });
            return await this.isElementDisplayed(this.guestHomePageText);
        } catch (error) { console.error("Error in isGuestHomePageDisplayed:", error); return false;
        }
    }

    async clickProfileIcon() {
        try { await this.click(this.profileIcon);} 
        catch (error) { console.error("Error in clickProfileIcon:", error); throw error;}
    }

    async isPopupMessageDisplayed(): Promise<boolean> {
        try { await this.popupMessage.waitForDisplayed({ timeout: 10000 });
            return await this.isElementDisplayed(this.popupMessage);
        } catch (error) { console.error("Error in isPopupMessageDisplayed:", error); return false;}
    }

    async clickCancelBtn() {
        try { await this.click(this.cancelBtn);
        } catch (error) { console.error("Error in clickCancelBtn:", error); throw error;}
    }

    async clickYesBtn() {
        try { await this.click(this.yesBtn);
        } catch (error) { console.error("Error in clickYesBtn:", error); throw error;}
    }

    async clickHamburgerBtn() {
        try { await this.click(this.hamburgerBtn);
        } catch (error) { console.error("Error in clickHamburgerBtn:", error); throw error;}
    }

    async clickSeriesVOrderBtn() {
        try { await this.click(this.seriesVOrderBtn);
        } catch (error) { console.error("Error in clickSeriesVOrderBtn:", error); throw error;}
    }

    async clickUpArrowBtn() {
        try { await this.click(this.upArrowBtn);
        } catch (error) { console.error("Error in clickUpArrowBtn:", error); throw error;}
    }

    async clickSaveBtn() {
        try { await this.click(this.saveBtn);
        } catch (error) { console.error("Error in clickSaveBtn:", error); throw error;}
    }

    async clickContinueBtn() {
        try { await this.click(this.continueBtn);
        } catch (error) { console.error("Error in clickContinueBtn:", error); throw error;}
    }

    async clickSeriesIVLearnMoreBtn() {
        try { await this.click(this.seriesIVLearnMoreBtn);
        } catch (error) { console.error("Error in clickSeriesIVLearnMoreBtn:", error); throw error;}
    }

    async clickSeriesVLearnMoreBtn() {
        try { await this.click(this.seriesVLearnMoreBtn);
        } catch (error) { console.error("Error in clickSeriesVLearnMoreBtn:", error); throw error;}
    }

    async clickCustomOrderBtn() {
        try { await this.click(this.customOrderBtn);
        } catch (error) { console.error("Error in clickCustomOrderBtn:", error); throw error;}
    }
}

export default new GuestLogin();