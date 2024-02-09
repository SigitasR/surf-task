import { expect, Locator, Page } from '@playwright/test';

export default class StepBlock {
    private readonly stepperBlockContainer: Locator;
    private readonly stepperTitle: Locator;
    private readonly subscriptionLink: Locator;
    private readonly additionalProductsLink: Locator;
    private readonly paymentLink: Locator;

    constructor(private readonly page: Page) {
        this.stepperBlockContainer = this.page.getByTestId('stepper-block');
        this.stepperTitle = this.stepperBlockContainer.getByTestId('stepper-title');
        this.subscriptionLink = this.stepperBlockContainer.locator('a[href="/"]');
        this.additionalProductsLink = this.stepperBlockContainer.locator('a[href="/additional"]');
        this.paymentLink = this.stepperBlockContainer.locator('a[href="/purchase"]');
    }

    async clickSubscription() {
        await this.subscriptionLink.click();
    }

    async clickAdditionalProducts() {
        await this.additionalProductsLink.click();
    }

    async clickPayment() {
        await this.paymentLink.click();
    }

    async expectStepBlockToBeVisible() {
        await expect(this.stepperBlockContainer).toBeVisible();
    }

    async expectStepTitleToBe(title: string) {
        await expect(this.stepperTitle).toHaveText(title);
    }
}
