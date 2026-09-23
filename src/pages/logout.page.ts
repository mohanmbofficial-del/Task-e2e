import { LOGIN_SELECTORS } from '../selectors/loginSelectors';
import BasePage from './base.page';

class LogoutPage extends BasePage {

    private get myProfileIcon() { return $(LOGIN_SELECTORS.PROFILE_ICON); }
    private get btnSignOut() { return $(LOGIN_SELECTORS.SIGN_OUT); }
    private get btnYes() { return $(LOGIN_SELECTORS.YES_BUTTON); }

    async logOut() {
        await this.click(this.myProfileIcon);
        await this.click(this.btnSignOut);
        await this.click(this.btnYes);
    }
}

export default new LogoutPage();
