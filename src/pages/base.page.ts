export default class BasePage {
    async click(element: ChainablePromiseElement) {
        try { await element.waitForDisplayed();
              await element.click();
        } catch (error) { console.error(`Failed to click on element:`, error); throw error; }
    }

    async setValue(element: ChainablePromiseElement, value: string) {
        try { await element.waitForDisplayed();
              await element.click();
              await element.setValue(value);
        } catch (error) { console.error(`Failed to set value "${value}" on element:`, error);
            throw error;
        }
    }

    async getText(element: ChainablePromiseElement): Promise<string> {
        try { await element.waitForDisplayed();
              return await element.getText();
        } catch (error) { console.error(`Failed to get text from element:`, error); throw error;
        }
    }

    async scrollDown() {
        try { await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollForward()');
        } catch (error) { console.warn(`Failed to scroll down:`, error); }
    }

    async scrollUp() {
        try { await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollBackward()');
        } catch (error) { console.warn(`Failed to scroll up:`, error); }
    }

    async scrollDownByElement(element: string) {
        try { await $(`android=new UiScrollable(new UiSelector().scrollable(true)).scrollIntoView(new UiSelector().description("${element}"))`);
        } catch (error) { console.warn(`Failed to scroll down to element "${element}":`, error); }
    }

    async scrollUpByElement(element: string) {
        try { await $(`android=new UiScrollable(new UiSelector().scrollable(true)).scrollIntoView(new UiSelector().description("${element}"))`);
        } catch (error) { console.warn(`Failed to scroll up to element "${element}":`, error); }
    }

    async closeKeyboard() {
        try { await driver.hideKeyboard();
        } catch (error) { console.log('Keyboard already closed'); }
    }

    async clearAndSetInput(element: ChainablePromiseElement, value: string) {
        try { await element.waitForDisplayed();
              await element.clearValue();
              await element.setValue(value);
        } catch (error) { console.error(`Failed to clear and set value "${value}" on element:`, error); throw error;
        }
    }

    async isElementDisplayed(element: ChainablePromiseElement): Promise<boolean> {
        try { await element.waitForDisplayed({ timeout: 5000 });
              return await element.isDisplayed();
        } catch { return false; }
    }

    async scrollAndEnterText(element: ChainablePromiseElement, value: string) {
        try { await element.waitForDisplayed();
              await element.setValue(value);
        } catch (error) { console.error(`Failed to enter text "${value}" on element:`, error); throw error;
        }
    }
}

