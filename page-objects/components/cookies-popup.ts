import { Locator, Page } from '@playwright/test';

export default class CookiesPopup {

    private readonly cookiesPopup: Locator;
    private readonly acceptCookiesButton: Locator;

    constructor(private readonly page: Page) {
        this.cookiesPopup = this.page.getByTestId('cookies-popup');
        this.acceptCookiesButton = this.cookiesPopup.getByTestId('accept-cookies-button');
    }

    async acceptCookies() {
        await this.page.waitForLoadState('domcontentloaded');
        await this.acceptCookiesButton.click();
    }

}