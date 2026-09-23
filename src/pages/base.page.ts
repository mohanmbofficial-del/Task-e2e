export default class BasePage {
    async click(element: ChainablePromiseElement) {
        await element.waitForDisplayed();
        await element.click();
    }

    async setValue(element: ChainablePromiseElement, value: string) {
        await element.waitForDisplayed();
        await element.click();
        await element.setValue(value);
    }

    async getText(element: ChainablePromiseElement): Promise<string> {
        await element.waitForDisplayed();
        return await element.getText();
    }

    async scrollDown() {
        await $( 'android=new UiScrollable(new UiSelector().scrollable(true)).scrollForward()');
    }

    async closeKeyboard() {
        try { await driver.hideKeyboard(); } 
        catch (error) { console.log('Keyboard already closed'); }
    }

    async clearAndSetInput(element: ChainablePromiseElement, value: string) {
        await element.waitForDisplayed();
        await element.clearValue();
        await element.setValue(value);
    }
}
