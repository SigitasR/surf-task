import { expect, Locator, Page } from '@playwright/test';

export default class CouponBlock {

    private readonly enterCouponButton: Locator;
    private readonly couponInput: Locator;
    private readonly applyCouponButton: Locator;
    private readonly appliedCouponLabel: Locator;

    constructor(private readonly page: Page) {
        this.enterCouponButton = this.page.getByTestId('button-enter-coupon');
        this.couponInput = this.page.getByTestId('input-coupon').locator('input');
        this.applyCouponButton = this.page.getByTestId('button-apply-coupon');
        this.appliedCouponLabel = this.page.getByTestId('applied-coupon');
    }

    async clickEnterCoupon() {
        await this.enterCouponButton.click();
    }

    async typeCouponCode(couponCode: string) {
        await this.couponInput.fill(couponCode);
    }

    async applyCoupon() {
        await this.applyCouponButton.click();
    }

    async expectCouponToBeApplied(coupon: string) {
        await expect(this.appliedCouponLabel).toHaveText(coupon);
    }

}