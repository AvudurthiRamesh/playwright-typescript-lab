import { test } from "@playwright/test";
import { BasePage } from "../pages/BasePage";
import { ABTestingPage } from "../pages/ABTestingPage";

// Test Case:
// Verify that the "A/B Testing" page opens successfully in a new browser tab
// and the heading displayed on the page is valid.
test("Verify A/B Testing page", async ({ page }) => {

    // Create an object of BasePage.
    // The Playwright 'page' object represents the main browser tab.
    const basePage = new BasePage(page);

    // Launch the application.
    // The application URL is read from the baseURL configured
    // in the playwright.config.ts file.
    await basePage.launchApplication();

    // Open the "A/B Testing" hyperlink in a new browser tab.
    //
    // The returned object (abTab) represents the newly opened tab.
    const abTab = await basePage.openLinkInNewTab("A/B Testing");

    // Create an object of ABTestingPage by passing the newly
    // opened browser tab.
    //
    // All actions performed using this object will happen
    // only on the A/B Testing page.
    const abTestingPage = new ABTestingPage(abTab);

    // Verify that the page heading contains one of the expected
    // values (Control or Variation).
    await abTestingPage.verifyHeading();

    // Close the newly opened browser tab.
    // Control automatically returns to the original browser tab.
    await abTab.close();

});

// Test Case:
// Verify that the "Add/Remove Elements" page can be opened
// in a new browser tab.
//
// NOTE:
// This test currently reuses the A/B Testing page object.
// Once the AddRemoveElementsPage is implemented,
// replace the corresponding page object and methods.
test("Verify Add/Remove Elements page", async ({ page }) => {

    // Create BasePage object.
    const basePage = new BasePage(page);

    // Launch the application.
    await basePage.launchApplication();

    // Open the "Add/Remove Elements" link in a new tab.
    const addRemoveTab = await basePage.openLinkInNewTab("Add/Remove Elements");

    // TODO:
    // Replace ABTestingPage with AddRemoveElementsPage once implemented.
    //
    // Example:
    //
    // const addRemovePage = new AddRemoveElementsPage(addRemoveTab);
    // await addRemovePage.clickAddElement();

    // Close the newly opened browser tab.
    await addRemoveTab.close();

});