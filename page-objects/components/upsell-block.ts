import { Locator, Page } from '@playwright/test';

export default class UpsellBlock {

    private readonly upsellContainer: Locator;
    private readonly continueWithoutBundleButton: Locator;

    constructor(private readonly page: Page) {
        this.upsellContainer = this.page.getByTestId('upsell-block');
        this.continueWithoutBundleButton = this.upsellContainer.locator('button', { hasText: 'Continue without bundle' });
    }

    async clickContinueWithoutBundle() {
        await this.continueWithoutBundleButton.click();
    }

}