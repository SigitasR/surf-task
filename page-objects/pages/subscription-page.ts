import { Locator, Page } from '@playwright/test';
import PlanBlock from '../components/plan-block';
import CouponBlock from '../components/coupon-block';

export default class SubscriptionPage {

    readonly plan24months: PlanBlock;
    readonly plan12months: PlanBlock;
    readonly plan1month: PlanBlock;
    readonly couponBlock: CouponBlock;

    private readonly continueToCheckoutButton: Locator;


    constructor(private readonly page: Page) {
        this.plan24months = new PlanBlock(this.page, 'plan-24');
        this.plan12months = new PlanBlock(this.page, 'plan-12');
        this.plan1month = new PlanBlock(this.page, 'plan-1');
        this.couponBlock = new CouponBlock(this.page);

        this.continueToCheckoutButton = this.page.getByTestId('continue-to-checkout-button');
    }

    async clickContinueToCheckout() {
        await this.continueToCheckoutButton.click();
    }

}