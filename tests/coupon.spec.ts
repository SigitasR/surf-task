import { test } from '@playwright/test';
import App from '../page-objects/app';

test.describe('Coupon usage tests', () => {

        const coupon = 'MRBeast';
        let app: App;

        test.beforeEach(async ({ page }) => {
            app = new App(page);
            await app.open();
            await app.cookiesPopup.acceptCookies()
        });

        test('Should test if error is shown when invalid coupon is applied', async () => {
            await test.step('Apply invalid coupon', async () => {
                await app.subscriptionPage.couponBlock.clickEnterCoupon();
                await app.subscriptionPage.couponBlock.typeCouponCode('kuponc');
                await app.subscriptionPage.couponBlock.applyCoupon();
                await app.subscriptionPage.couponBlock.expectCouponErrorToBeDisplayed();
            });
        });

        test('Should test if valid coupon is applied correctly', async () => {
            await test.step('Check 24 month plan pricing before applying coupon', async () => {
                await app.step.expectStepBlockToBeVisible();
                await app.step.expectStepTitleToBe('Select your subscription');
                await app.subscriptionPage.plan24months.expectSubscriptionTitleToBe('24-month subscription');
                await app.subscriptionPage.plan24months.expectPriceToBe(2.49);
                await app.subscriptionPage.plan24months.expectInitialBillingAmountToBe(59.76);
                await app.subscriptionPage.plan24months.expectRenewedBillingAmountToBe(55.55);
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
                await app.subscriptionPage.plan24months.expectRenewedBillingAmountToBe(55.55);
            });

            await test.step('Continue to Additional products page', async () => {
                await app.subscriptionPage.clickContinueToCheckout();
                await app.step.expectStepTitleToBe('Want the full Surfshark One bundle?');
            });

            await test.step('Continue to Payment page and check if coupon is applied', async () => {
                await app.additionalProductsPage.upsell.clickContinueWithoutBundle();
                await app.step.expectStepTitleToBe('Enter the email for your Surfshark account');
                await app.paymentPage.orderSummary.expectCouponToBeApplied(coupon);
            });
        });
    },
);

