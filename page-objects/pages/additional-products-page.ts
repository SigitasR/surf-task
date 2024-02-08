import { Page } from '@playwright/test';
import UpsellBlock from '../components/upsell-block';

export default class AdditionalProductsPage {

    readonly upsell: UpsellBlock;

    constructor(private readonly page: Page) {
        this.upsell = new UpsellBlock(this.page);
    }
}