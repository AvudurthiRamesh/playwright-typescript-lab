import { test } from "@playwright/test";
import { BasePage } from "../pages/BasePage";
import { ABTestingPage } from "../pages/ABTestingPage";
import { AddRemovePage } from "../pages/AddRemovePage";
import {CheckBoxes} from "../pages/Checkboxes"

test("Verify A/B Testing page", async ({ page }) => {

    // Create BasePage object.
    const basePage = new BasePage(page);

    // Launch the application.
    await basePage.launchApplication();

    // Open the A/B Testing page in a new browser tab.
    const abTab = await basePage.openLinkInNewTab("A/B Testing");

    // Create ABTestingPage object.
    const abTestingPage = new ABTestingPage(abTab);

    // Verify the page heading.
    await abTestingPage.verifyHeading();

    // Close the newly opened tab.
    await abTab.close();

});

test("Verify Add/Remove Elements page", async ({ page }) => {

    // Create BasePage object.
    const basePage = new BasePage(page);

    // Launch the application by calling launchApplication from basepage
    await basePage.launchApplication();

    // Open the Add/Remove Elements page in a new browser tab assign the page to new object
    const addRemoveTab = await basePage.openLinkInNewTab("Add/Remove Elements");

    // Create AddRemovePage object.
    const addRemovePage = new AddRemovePage(addRemoveTab);

    // Perform Add/Remove Elements page actions.
    await addRemovePage.AddRemove();

    // Close the newly opened tab.
    await addRemoveTab.close();

});
test("Verify Checkboxes", async({page}) => {

    const basePage = new BasePage(page)
    await basePage.launchApplication()
    const checkBox = await basePage.openLinkInNewTab("Checkboxes")
    const chkbox = new CheckBoxes(checkBox)
    await chkbox.verifyCheckBox()
    await checkBox.close();

})