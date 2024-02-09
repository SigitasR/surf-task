import { test } from '@playwright/test';
import App from '../page-objects/app';

test.describe('Step navigation test', () => {
    let app: App;

    test.beforeEach(async ({ page }) => {
        app = new App(page);
        await app.open();
        await app.cookiesPopup.acceptCookies();
    });

    test('Should test step navigation', async () => {
        await test.step('Verify navigation to Additional products page', async () => {
            await app.step.clickAdditionalProducts();
            await app.step.expectStepTitleToBe('Want the full Surfshark One bundle?');
        });

        await test.step('Verify navigation to Payment page', async () => {
            await app.step.clickPayment();
            await app.step.expectStepTitleToBe('Enter the email for your Surfshark account');
        });

        await test.step('Verify navigation to Subscription page', async () => {
            await app.step.clickSubscription();
            await app.step.expectStepTitleToBe('Select your subscription');
        });
    });
});
