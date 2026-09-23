export const GUEST_LOGIN_SELECTORS = {
    // LOGIN & GUEST ACCESS
    CONTINUE_AS_GUEST_BTN: 'android=new UiSelector().description("Continue As Guest")',
    LOGIN_SIGN_UP_BUTTON: 'android=new UiSelector().resourceId("mobileNumber")',

    // GUEST HOME PAGE
    GUEST_HOME_PAGE_TEXT: 'android=new UiSelector().descriptionContains("Guest")',
    PROFILE_ICON: 'android=new UiSelector().resourceId("My Profile")',
    TRACK_MY_ORDER_BTN: 'android=new UiSelector().description("Track My Order")',
    PERSONALIZE_HOME_ELEVATOR_BTN: 'android=new UiSelector().description("Personalise My Home Elevator")',

    // POPUP
    POPUP_MESSAGE: 'android=new UiSelector().descriptionContains("access this page")',
    CANCEL_BTN: 'android=new UiSelector().description("Cancel")',
    YES_BTN: 'android=new UiSelector().description("Yes")',

    // MENU & SERIES SELECTION
    HAMBURGER_BTN: 'android=new UiSelector().resourceId("Menu")',
    SERIES_V_ORDER_BTN: 'android=new UiSelector().resourceId("Order").instance(0)',

    // SERIES DETAILS & CUSTOM ORDER
    SERIES_IV_LEARN_MORE_BTN: 'android=new UiSelector().description("Learn More").instance(0)',
    SERIES_V_LEARN_MORE_BTN: 'android=new UiSelector().description("Learn More").instance(1)',
    CUSTOM_ORDER_BTN: 'android=new UiSelector().resourceId("Custom Order")',

    // ORDER PERSONALIZATION ACTIONS
    UP_ARROW_BTN: 'android=new UiSelector().className("android.widget.ImageView").instance(2)',
    CONTINUE_BTN: 'android=new UiSelector().description("Continue")',
    SAVE_BTN: 'android=new UiSelector().description("Save")'
};