export const LOGIN_SELECTORS = {
    //LOGIN_SELECTORS
    APP_PACKAGE: 'com.nibav.client',
    APP: 'android=new UiSelector().text("Nibav Client")',
    MOBILE_NUMBER: 'android=new UiSelector().resourceId("mobileNumber")',
    LOGIN_BUTTON: 'android=new UiSelector().description("Login / Sign Up")',
    OTP_FIELD: 'android=new UiSelector().resourceId("SignUp OTP Field")',
    SUBMIT_BUTTON: 'android=new UiSelector().resourceId("Submit Button")',
    PERSONALISE_HOME_ELEVATOR: 'android=new UiSelector().description("Personalise My Home Elevator")',

    //LOGOUT_SELECTORS
    PROFILE_ICON: 'android=new UiSelector().resourceId("My Profile")',
    SIGN_OUT: 'android=new UiSelector().description("Sign Out")',
    YES_BUTTON: 'android=new UiSelector().description("Yes")',
};
