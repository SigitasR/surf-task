import { test } from '@playwright/test';
import App from '../page-objects/app';

test.describe('Subscription plan tests', () => {

        let app: App;

        test.beforeEach(async ({ page }) => {
            app = new App(page);
            await app.open();
            await app.cookiesPopup.acceptCookies()
        });

        test('Should test subscription plans page', async () => {
            await test.step('Verify 24 month subscription plan', async () => {
                await app.subscriptionPage.plan24months.expectPlanContainerToBeVisible();
                await app.subscriptionPage.plan24months.expectSubscriptionTitleToBe('24-month subscription');
                await app.subscriptionPage.plan24months.expectPriceToBe(2.49);
            });

            await test.step('Verify 12 month subscription plan', async () => {
                await app.subscriptionPage.plan12months.expectPlanContainerToBeVisible();
                await app.subscriptionPage.plan12months.expectSubscriptionTitleToBe('12-month subscription');
                await app.subscriptionPage.plan12months.expectPriceToBe(3.99);
            });

            await test.step('Verify 1 month subscription plan', async () => {
                await app.subscriptionPage.plan1month.expectPlanContainerToBeVisible();
                await app.subscriptionPage.plan1month.expectSubscriptionTitleToBe('1-month subscription');
                await app.subscriptionPage.plan1month.expectPriceToBe(10.99);
            });

            await test.step('Click on 12-month plan, verify if it is selected', async () => {
                await app.subscriptionPage.plan12months.selectPlan();
                await app.subscriptionPage.plan12months.expectPlanToBeHighlighted();
            });

            await test.step('Click on 1-month plan, verify if it is selected', async () => {
                await app.subscriptionPage.plan1month.selectPlan();
                await app.subscriptionPage.plan1month.expectPlanToBeHighlighted();
            });

            await test.step('Click on 24-month plan, verify if it is selected', async () => {
                await app.subscriptionPage.plan24months.selectPlan();
                await app.subscriptionPage.plan24months.expectPlanToBeHighlighted();
            });

        });
    },
);

