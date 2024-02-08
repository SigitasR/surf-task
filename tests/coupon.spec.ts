import { test } from '@playwright/test';
import App from '../page-objects/app';


test.describe('Coupon usage test', () => {

        const coupon = 'MRBeast';
        let app: App;

        test.beforeEach(async ({ page }) => {
            app = new App(page);
            await app.open();
        });

        test('Should test if valid coupon is applied correctly', async () => {
            await test.step('Check 24 month plan pricing before applying coupon', async () => {
                await app.step.expectStepBlockToBeVisible();
                await app.subscriptionPage.plan24months.expectSubscriptionTitleToBe('24-month subscription');
                await app.subscriptionPage.plan24months.expectPriceToBe(2.49);
                await app.subscriptionPage.plan24months.expectInitialBillingAmountToBe(59.76);
                await app.subscriptionPage.plan24months.expectRenewedBillingAmountToBe(55.46);
            });

            await test.step('Apply coupon', async () => {
                await app.subscriptionPage.couponBlock.clickEnterCoupon();
                await app.subscriptionPage.couponBlock.typeCouponCode(coupon);
                await app.subscriptionPage.couponBlock.applyCoupon();
                await app.subscriptionPage.couponBlock.expectCouponToBeApplied(coupon);
            });

            await test.step('Check 24 month plan after applying coupon', async () => {
                await app.subscriptionPage.plan24months.expectPriceToBe(1.69);
                await app.subscriptionPage.plan24months.expectInitialBillingAmountToBe(50.70);
                await app.subscriptionPage.plan24months.expectRenewedBillingAmountToBe(55.46);
                await app.subscriptionPage.clickContinueToCheckout();
            });

        });


    },
);

