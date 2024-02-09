import { expect, Locator, Page } from '@playwright/test';

export default class CouponBlock {
    private readonly couponBlockContainer: Locator;
    private readonly enterCouponButton: Locator;
    private readonly couponInput: Locator;
    private readonly applyCouponButton: Locator;
    private readonly appliedCouponLabel: Locator;
    private readonly couponErrorLabel: Locator;

    constructor(private readonly page: Page) {
        this.couponBlockContainer = this.page.getByTestId('coupon-block');
        this.enterCouponButton = this.couponBlockContainer.getByTestId('button-enter-coupon');
        this.couponInput = this.couponBlockContainer.getByTestId('input-coupon').locator('input');
        this.applyCouponButton = this.couponBlockContainer.getByTestId('button-apply-coupon');
        this.appliedCouponLabel = this.couponBlockContainer.getByTestId('applied-coupon');
        this.couponErrorLabel = this.couponBlockContainer.getByTestId('coupon-error');
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

    async expectCouponErrorToBeDisplayed() {
        await expect(this.couponErrorLabel).toHaveText('Coupon code is invalid.');
    }
}
