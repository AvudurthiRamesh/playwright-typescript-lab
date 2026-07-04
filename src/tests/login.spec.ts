import { test } from '@playwright/test';
import { LoginPage } from '../pages/loginpage';

test('Verify user can login successfully', async ({ page }) => {

    const loginPage = new LoginPage(page);

    await page.goto('https://www.saucedemo.com');

    await loginPage.login();

});