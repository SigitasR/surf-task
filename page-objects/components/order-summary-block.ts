import { expect, Locator, Page } from '@playwright/test';

export default class OrderSummaryBlock {

    private readonly orderSummaryContainer: Locator;
    private readonly couponContainer: Locator;

    constructor(private readonly page: Page) {
        this.orderSummaryContainer = this.page.getByTestId('summary');
        this.couponContainer = this.orderSummaryContainer.getByTestId('coupon-container');
    }

    async expectCouponToBeApplied(coupon: string) {
        await expect(this.couponContainer).toContainText(coupon);
    }

}