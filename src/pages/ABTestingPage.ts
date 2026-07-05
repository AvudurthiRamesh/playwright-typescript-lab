import { Page } from "@playwright/test";

export class ABTestingPage {

    // Store the Playwright page object so that all methods
    // in this class can interact with the A/B Testing page.
    constructor(private page: Page) { }

    // Verify the heading displayed on the A/B Testing page.
    //
    // This page is dynamic and may display one of the following headings:
    // 1. A/B Test Control
    // 2. A/B Test Variation 1
    //
    // If any other heading is displayed, the test should fail.
    async verifyHeading() {

        // Read the text displayed in the page heading (<h3>).
        const heading = await this.page.getByRole("heading").textContent();

        // Verify which variation of the page is displayed.
        if (heading === "A/B Test Control") {

            console.log("Control Page");

        }

        // Verify if the application has loaded the Variation page.
        else if (heading === "A/B Test Variation 1") {

            console.log("Variation Page");

        }

        // If the heading is different from the expected values,
        // fail the test with a meaningful error message.
        else {

            throw new Error(`Unexpected Heading: ${heading}`);

        }
    }
}