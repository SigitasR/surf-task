import { expect, Locator, Page } from '@playwright/test';

export default class PlanBlock {

    private readonly planContainer: Locator;
    private readonly subscriptionTitle: Locator;
    private readonly priceTag: Locator;
    private readonly priceTagAmount: Locator;
    private readonly billingInfoContainer: Locator;
    private readonly billingInitialAmount: Locator;
    private readonly billingRenewalAmount: Locator;

    constructor(private readonly page: Page, private readonly selector: string) {
        this.planContainer = this.page.getByTestId(selector);
        this.subscriptionTitle = this.planContainer.getByTestId('subscription-title');
        this.priceTag = this.planContainer.getByTestId('price-tag');
        this.priceTagAmount = this.priceTag.getByTestId('money');
        this.billingInfoContainer = this.planContainer.getByTestId('billing-info');
        this.billingInitialAmount = this.billingInfoContainer.getByTestId('money').first();
        this.billingRenewalAmount = this.billingInfoContainer.getByTestId('money').nth(1);
    }

    async expectSubscriptionTitleToBe(title: string) {
        await expect(this.subscriptionTitle).toHaveText(title);
    }

    async expectPriceToBe(amount: number) {
        await expect(this.priceTagAmount).toHaveText(amount.toFixed(2));
    }

    async expectInitialBillingAmountToBe(amount: number) {
        await expect(this.billingInitialAmount).toHaveText(amount.toFixed(2));
    }

    async expectRenewedBillingAmountToBe(amount: number) {
        await expect(this.billingRenewalAmount).toHaveText(amount.toFixed(2));
    }


}