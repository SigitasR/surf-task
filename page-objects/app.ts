import { Page } from '@playwright/test';
import SubscriptionPage from './pages/subscription-page';
import StepBlock from './components/step-block';
import AdditionalProductsPage from './pages/additional-products-page';
import PaymentPage from './pages/payment-page';
import CookiesPopup from './components/cookies-popup';

export default class App {

    readonly step: StepBlock;
    readonly subscriptionPage: SubscriptionPage;
    readonly additionalProductsPage: AdditionalProductsPage;
    readonly paymentPage: PaymentPage;
    readonly cookiesPopup: CookiesPopup;

    constructor(private readonly page: Page) {
        this.step = new StepBlock(this.page);
        this.subscriptionPage = new SubscriptionPage(this.page);
        this.additionalProductsPage = new AdditionalProductsPage(this.page);
        this.paymentPage = new PaymentPage(this.page);
        this.cookiesPopup = new CookiesPopup(this.page);
    }

    async open() {
        await this.page.goto('/');
    }

}