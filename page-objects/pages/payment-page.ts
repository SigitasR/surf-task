import { Page } from '@playwright/test';
import OrderSummaryBlock from '../components/order-summary-block';

export default class PaymentPage {
    readonly orderSummary: OrderSummaryBlock;

    constructor(private readonly page: Page) {
        this.orderSummary = new OrderSummaryBlock(this.page);
    }
}
