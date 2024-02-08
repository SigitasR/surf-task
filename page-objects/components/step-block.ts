import { expect, Locator, Page } from '@playwright/test';

export default class StepBlock {

    private readonly stepperBlockContainer: Locator;

    constructor(private readonly page: Page) {
        this.stepperBlockContainer = this.page.getByTestId('stepper-block');
    }

    async expectStepBlockToBeVisible() {
        await expect(this.stepperBlockContainer).toBeVisible();
    }

}