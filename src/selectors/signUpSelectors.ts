export const SIGN_UP_SELECTORS = {
    //STEP - 1
    PROFILE_IMAGE: 'android=new UiSelector().className("android.widget.ImageView").instance(2)',
    DONE_BUTTON: 'android=new UiSelector().className("android.widget.Button").instance(3)',
    TEST_IMAGE: 'android=new UiSelector().className("android.view.View").instance(18)',
    FIRST_NAME: 'android=new UiSelector().resourceId("Enter First Name")',
    LAST_NAME: 'android=new UiSelector().resourceId("Enter Last Name")',
    CONTACT_NUMBER: 'android=new UiSelector().className("android.widget.EditText").instance(2)',
    EMAIL: 'android=new UiSelector().resourceId("Enter Email")',
    NEXT_BUTTON: 'android=new UiSelector().resourceId("Next Button")',

    //STEP - 2
    ADDRESS_LINE_1: 'android=new UiSelector().resourceId("Enter Address Line 1")',
    ADDRESS_LINE_2: 'android=new UiSelector().resourceId("Enter Address Line 2")',
    CITY: 'android=new UiSelector().resourceId("Enter City")',
    LANDMARK: 'android=new UiSelector().resourceId("Enter Landmark")',
    PINCODE: '//android.view.View[contains(@content-desc, "Pin Code")]/following-sibling::android.widget.EditText',
    VERIFY_MY_ACCOUNT_BUTTON: 'android=new UiSelector().resourceId("Verify My Account")',

    //OTP FIELDS
    SIGN_UP_OTP_FIELD: 'android=new UiSelector().resourceId("SignUp OTP Field")',
    SIGN_UP_SUBMIT_BUTTON: 'android=new UiSelector().resourceId("Submit Button")',
    RESEND_OTP_BUTTON: 'android=new UiSelector().resourceId("Resend OTP")',

    //HOME PAGE
    MY_PROFILE_ICON: 'android=new UiSelector().resourceId("My Profile")',

    //PROFILE PAGE
    SETTINGS: 'android=new UiSelector().description("Settings")',

    //SETTINGS PAGE
    DELETE_MY_ACCOUNT: 'android=new UiSelector().descriptionContains("Delete My Account")',

    //DELETE_POPUP
    YES_BUTTON: 'android=new UiSelector().description("Yes")',

    //DELETE REASON_POPUP
    REASON_INPUT: 'android=new UiSelector().className("android.widget.EditText")',
    SUBMIT_BUTTON: 'android=new UiSelector().description("Submit")'
}
