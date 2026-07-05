import { Page } from "@playwright/test";

// BasePage contains common reusable methods that can be shared
// across all page classes in the framework.
//
// Examples:
// - Launch the application
// - Open links in a new browser tab
// - Generic navigation methods
export class BasePage {

    // Constructor is automatically called whenever an object
    // of BasePage is created.
    //
    // Example:
    // const basePage = new BasePage(page);
    //
    // The Playwright 'page' object represents the current browser tab.
    // We store it as a private class member so that every method
    // in this class can use the same page instance.
    constructor(private page: Page) { }

    // Launch the application.
    //
    // The application's URL is read from the 'baseURL'
    // configured in playwright.config.ts.
    //
    // Example:
    // baseURL = https://the-internet.herokuapp.com
    //
    // Calling page.goto("/") automatically navigates to:
    // https://the-internet.herokuapp.com/
    async launchApplication() {
        await this.page.goto("/");
    }

    // Opens the specified hyperlink in a new browser tab.
    //
    // Parameter:
    // linkName - Visible text of the hyperlink.
    //
    // Example:
    // const newPage = await basePage.openLinkInNewTab("A/B Testing");
    //
    // Returns:
    // A Playwright Page object representing the newly opened browser tab.
    async openLinkInNewTab(linkName: string) {

        // Execute both operations simultaneously:
        //
        // 1. Wait for a new browser tab to open.
        // 2. Ctrl/Cmd + Click the specified hyperlink.
        //
        // Promise.all() ensures Playwright starts waiting for the
        // new tab before clicking the link, preventing race conditions.
        const [newPage] = await Promise.all([

            // Wait until a new browser tab (Page) is created.
            this.page.context().waitForEvent('page'),

            // Locate the hyperlink using its visible text and
            // open it in a new browser tab.
            //
            // ControlOrMeta:
            // - Windows/Linux -> Ctrl + Click
            // - macOS         -> Cmd + Click
            this.page.getByText(linkName).click({
                modifiers: ['ControlOrMeta']
            })
        ]);

        // Wait until the newly opened page finishes loading
        // before performing any actions.
        await newPage.waitForLoadState();

        // Return the newly opened browser tab so that the
        // calling Page Object or test can continue interacting with it.
        return newPage;
    }
}