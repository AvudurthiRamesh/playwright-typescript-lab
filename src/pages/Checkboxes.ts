import { test, Page } from "@playwright/test"

export class CheckBoxes {
    constructor(private page: Page) {

    }

    async verifyCheckBox() {
        const checkboxes = this.page.getByRole('checkbox');

        await checkboxes.first().check();
        await checkboxes.nth(1).uncheck();
    }

}