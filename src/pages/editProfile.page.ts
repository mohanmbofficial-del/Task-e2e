import BasePage from "./base.page";
import { EDIT_PROFILE_SELECTORS } from "../selectors/editProfileSelectors";
import { SIGN_UP_SELECTORS } from "../selectors/signUpSelectors";

class EditProfilePage extends BasePage {
    private get profileIcon() { return $(SIGN_UP_SELECTORS.MY_PROFILE_ICON); }
    private get editImageBtnCamera() { return $(EDIT_PROFILE_SELECTORS.EDIT_IMAGE_BTN_BY_CAMERA); }
    private get editImageBtnGallery() { return $(EDIT_PROFILE_SELECTORS.EDIT_IMAGE_BTN_BY_GALLERY); }   
    private get openGalleryBtn() { return $(EDIT_PROFILE_SELECTORS.OPEN_GALLERY_BTN); }
    private get takePhotoBtn() { return $(EDIT_PROFILE_SELECTORS.TAKE_PHOTO_BTN); }
    private get doneBtnGallery() { return $(EDIT_PROFILE_SELECTORS.DONE_BTN_GALLERY); }
    private get cameraBtn() { return $(EDIT_PROFILE_SELECTORS.CAMERA_BTN); }
    private get takePicture() { return $(EDIT_PROFILE_SELECTORS.TAKE_PICTURE); }
    private get doneBtnCamera() { return $(EDIT_PROFILE_SELECTORS.DONE_BTN_CAMERA); }
    private get profileSetting() { return $(EDIT_PROFILE_SELECTORS.PROFILE_SETTING); }
    private get fullNameField() { return $(EDIT_PROFILE_SELECTORS.FULL_NAME_FIELD); }
    private get addressField() { return $(EDIT_PROFILE_SELECTORS.ADDRESS_FIELD); }
    private get mobileNumberField() { return $(EDIT_PROFILE_SELECTORS.MOBILE_NUMBER_FIELD); }
    private get emailField() { return $(EDIT_PROFILE_SELECTORS.EMAIL_FIELD); }
    private get firstName() { return $(EDIT_PROFILE_SELECTORS.FIRST_NAME); }
    private get lastName() { return $(EDIT_PROFILE_SELECTORS.LAST_NAME); }
    private get nameUpdateBtn() { return $(EDIT_PROFILE_SELECTORS.NAME_UPDATE_BTN); }
    private get addressLine1() { return $(EDIT_PROFILE_SELECTORS.ADDRESS_LINE_1); }
    private get addressLine2() { return $(EDIT_PROFILE_SELECTORS.ADDRESS_LINE_2); }
    private get city() { return $(EDIT_PROFILE_SELECTORS.CITY); }
    private get pincode() { return $(EDIT_PROFILE_SELECTORS.PINCODE); }
    private get addressSaveBtn() { return $(EDIT_PROFILE_SELECTORS.ADDRESS_SAVE_BTN); }
    private get editEmail() { return $(EDIT_PROFILE_SELECTORS.EDIT_EMAIL); }
    private get emailUpdateBtn() { return $(EDIT_PROFILE_SELECTORS.EMAIL_UPDATE_BTN); }
    private get backBtn() { return $(EDIT_PROFILE_SELECTORS.BACK_BTN); }

    async clickProfileIcon() {
        try{ await this.click(this.profileIcon); }
        catch(error) { console.log('Profile icon not found'); }
    }

    async isProfilePageDisplayed(): Promise<boolean> {
        try { await this.profileSetting.waitForDisplayed();
            return await this.profileSetting.isDisplayed();
        } catch { return false; }
    }

    async clickEditImageBtnCamera() {
        await this.click(this.editImageBtnCamera);
    }
    async clickEditImageBtnGallery() {
        await this.click(this.editImageBtnGallery);
    }
    async clickOpenGalleryBtn() {
        await this.click(this.openGalleryBtn);
    }
    async clickTakePhotoBtn() {
        await this.click(this.takePhotoBtn);
    }
    async clickDoneBtnGallery() {
        await this.click(this.doneBtnGallery);
    }
    async clickCameraBtn() {
        await this.click(this.cameraBtn);
    }
    async clickTakePicture() {
        await this.click(this.takePicture);
    }
    async clickDoneBtnCamera() {
        await this.click(this.doneBtnCamera);
    }

    async updateProfileImageUsingCamera() {
        await this.clickEditImageBtnCamera();
        await this.clickCameraBtn();
        await this.clickTakePicture();
        await this.clickDoneBtnCamera();
    }

    async updateProfileImageFromGallery() {
        await this.clickEditImageBtnGallery();
        await this.clickOpenGalleryBtn();
        await this.clickTakePhotoBtn();
        await this.clickDoneBtnGallery();
    }

    async isProfileImageDisplayed(): Promise<boolean> {
        try { await this.editImageBtnCamera.waitForDisplayed();
            return await this.editImageBtnCamera.isDisplayed();
        } catch { return false; }
    }
    
    async isProfileSettingDisplayed() {
        try { await this.profileSetting.waitForDisplayed();
            return await this.profileSetting.isDisplayed();
        } catch { return false; }
    }

    async clickProfileSetting() {
        await this.click(this.profileSetting);
    }

    async isProfileSettingsPageDisplayed(): Promise<boolean> {
        try { await this.fullNameField.waitForDisplayed();
            return await this.fullNameField.isDisplayed();
        } catch { return false; }
    }

    async clickFullNameField() {
        await this.click(this.fullNameField);
    }
    async clickAddressField() {
        await this.click(this.addressField);
    }
    async clickMobileNumberField() {
        await this.click(this.mobileNumberField);
    }
    async clickEmailField() {
        await this.click(this.emailField);
    }
    async clickFirstName() {
        await this.click(this.firstName);
    }

    async setFirstName(value: string) {
        await this.clearAndSetInput(this.firstName, value);
    }

    async clickLastName() {
        await this.click(this.lastName);
    }

    async setLastName(value: string) {
        await this.clearAndSetInput(this.lastName, value);
    }
    async clickNameUpdateBtn() {
        await this.click(this.nameUpdateBtn);
    }

    async updateFullName(firstName: string, lastName: string) {
        await this.clickFullNameField();
        await this.clickFirstName();
        await this.setFirstName(firstName);
        await this.clickLastName();
        await this.setLastName(lastName);
        await this.closeKeyboard();
        await this.clickNameUpdateBtn();
    }

    async clickAddressLine1() {
        await this.click(this.addressLine1);
    }

    async setAddressLine1(value: string) {
        await this.clearAndSetInput(this.addressLine1, value);
    }
    async clickAddressLine2() {
        await this.click(this.addressLine2);
    }

    async setAddressLine2(value: string) {
        await this.clearAndSetInput(this.addressLine2, value);
    }
    async clickCity() {
        await this.click(this.city);
    }

    async setCity(value: string) {
        await this.clearAndSetInput(this.city, value);
        await this.closeKeyboard();
    }

    async clickPincode() {
        await this.click(this.pincode);
    }

    async setPincode(value: string) {
        await this.closeKeyboard();
        await this.scrollAndEnterText(this.pincode, value);
    }

    async clickAddressSaveBtn() {
        await this.click(this.addressSaveBtn);
    }

    async updateAddress(address1: string, address2: string, city: string, pincode: string) {
        await this.clickAddressField();
        await this.clickAddressLine1();
        await this.setAddressLine1(address1);
        await this.clickAddressLine2();
        await this.setAddressLine2(address2);
        await this.clickCity();
        await this.setCity(city);
        await this.clickPincode();
        await this.setPincode(pincode);
        await this.clickAddressSaveBtn();
    }

    async isAddressDisplayed(): Promise<boolean> {
        try { await this.addressField.waitForDisplayed();
            return await this.addressField.isDisplayed();
        } catch { return false; }
    }

    async verifyFullName(): Promise<boolean> {
        try { await this.fullNameField.waitForDisplayed();
            return await this.fullNameField.isDisplayed();
        } catch { return false; }
    }

    async clickEditEmail() {
        await this.click(this.editEmail);
    }

    async setEmail(value: string) {
        await this.clearAndSetInput(this.editEmail, value);
    }

    async clickEmailUpdateBtn() {
        await this.click(this.emailUpdateBtn);
    }

    async clickChangeEmail() {
        await this.click(this.editEmail);
    }

    async updateEmail(email: string) {
        await this.clickChangeEmail();
        await this.setEmail(email);
        await this.clickEmailUpdateBtn();
    }

    async isEmailDisplayed(): Promise<boolean> {
        try { await this.emailField.waitForDisplayed();
            return await this.emailField.isDisplayed();
        } catch { return false; }
    }

    async clickBackBtn() {
        await this.click(this.backBtn);
    }

    async comeBackToProfilePage() {
        await this.clickBackBtn();
    }
}
    
export default new EditProfilePage();