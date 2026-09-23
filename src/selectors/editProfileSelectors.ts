export const EDIT_PROFILE_SELECTORS = {

    //Edit profile image by select image
    EDIT_IMAGE_BTN : 'android=new UiSelector().className("android.widget.ImageView").instance(3)',
    OPEN_GALLERY_BTN : 'android=new UiSelector().description("Gallery")',
    TAKE_PHOTO_BTN : 'android=new UiSelector().className("android.view.View").instance(18)',
    DONE_BTN_GALLERY: 'android=new UiSelector().className("android.widget.Button").instance(3)',
    
    //Edit profile image by camera
    CAMERA_BTN : 'android=new UiSelector().description("Camera")',
    TAKE_PICTURE: 'android=new UiSelector().resourceId("com.oplus.camera:id/shutter_button")',
    DONE_BTN_CAMERA: 'android=new UiSelector().resourceId("com.oplus.camera:id/done_button")',
    
    //Profile setting page
    PROFILE_SETTING: 'android=new UiSelector().description("Profile Settings")',
    FULL_NAME_FIELD: 'android=new UiSelector().description("Full Name")',
    ADDRESS_FIELD: 'android=new UiSelector().resourceId("Address")',
    MOBILE_NUMBER_FIELD: 'android=new UiSelector().resourceId("mobileNumber")',
    EMAIL_FIELD: 'android=new UiSelector().resourceId("Email")',

    //Edit full name
    FIRST_NAME: 'android=new UiSelector().resourceId("Enter First Name")',
    LAST_NAME: 'android=new UiSelector().resourceId("Enter Last Name")',
    NAME_UPDATE_BTN: 'android=new UiSelector().description("update")',

    //Edit address
    ADDRESS_LINE_1: 'android=new UiSelector().resourceId("Enter Address Line 1")',
    ADDRESS_LINE_2: 'android=new UiSelector().resourceId("Enter Address Line 2")',
    CITY: 'android=new UiSelector().resourceId("Enter City")',
    PINCODE: 'android=new UiSelector().resourceId("Enter Zip Code")',
    ADDRESS_SAVE_BTN: 'android=new UiSelector().description("Save")',

    //Edit email
    EDIT_EMAIL: 'android=new UiSelector().resourceId("Enter Email")',
    EMAIL_UPDATE_BTN: 'android=new UiSelector().description("Update")'
}