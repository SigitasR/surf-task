import { Page } from '@playwright/test';
import SubscriptionPage from './pages/subscription-page';
import StepBlock from './components/step-block';

export default class App {

    readonly step: StepBlock;
    readonly subscriptionPage: SubscriptionPage;

    constructor(private readonly page: Page) {
        this.step = new StepBlock(this.page);
        this.subscriptionPage = new SubscriptionPage(this.page);
    }

    async open() {
        await this.page.goto('/');
    }

}