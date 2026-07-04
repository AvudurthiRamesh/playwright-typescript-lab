import { Page } from '@playwright/test';
import { JsonReader } from '../utils/JsonReader'

export class LoginPage {

    constructor(private page: Page) {}

    async login() {

        const data = JsonReader.readJson('resources/testdata.json');

        await this.page.fill('#user-name', data.username);
        await this.page.fill('#password', data.password);
        await this.page.click('#login-button');
    }
}