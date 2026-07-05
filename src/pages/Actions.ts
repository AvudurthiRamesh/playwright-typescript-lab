/* In this we are launching a url and perform different types of actions like Click, fill, dropdown
file download & upload etc */
import { Page } from "@playwright/test";

export class Actions {

    constructor(private page: Page) { }

    async openLinkInNewTab(linkName: string) {

        const [newPage] = await Promise.all([
            this.page.context().waitForEvent('page'),
            this.page.getByText(linkName).click({ modifiers: ['Control'] })
        ]);

        await newPage.waitForLoadState();

        return newPage;
    }
}

/*import { Page } from "@playwright/test";

export class Actions {
    constructor(private page: Page) {

    }
    // Open a new page by clicking a locator with Control (or Cmd) modifier.
    // Returns the newly opened Page.
    async ABTesting() {
        const [newPage] = await Promise.all([
            this.page.context().waitForEvent('page'),
            this.page.getByText('A/B Testing').click({ modifiers: ['Control'] })
        ]);

        await newPage.waitForLoadState();
    }
}







//     async openInNewPage(page: Page, locator: string) {
//         const [newPage] = await Promise.all([
//             page.context().waitForEvent('page'),
//             page.locator(locator).click({ modifiers: ['Control'] })
//         ]);

//         await newPage.waitForLoadState();
//         return newPage;
//     }
// }
*/