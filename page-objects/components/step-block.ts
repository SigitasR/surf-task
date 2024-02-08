import { expect, Locator, Page } from '@playwright/test';

export default class StepBlock {

    private readonly stepperBlockContainer: Locator;
    private readonly stepperTitle: Locator;

    constructor(private readonly page: Page) {
        this.stepperBlockContainer = this.page.getByTestId('stepper-block');
        this.stepperTitle = this.stepperBlockContainer.getByTestId('stepper-title');
    }

    async expectStepBlockToBeVisible() {
        await expect(this.stepperBlockContainer).toBeVisible();
    }

    async expectStepTitleToBe(title: string) {
        await expect(this.stepperTitle).toHaveText(title);
    }

}