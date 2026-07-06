import {Page, test} from "@playwright/test"

export class AddRemovePage{

    constructor (private page:Page)
    {}

    async AddRemove()
    {
    
        await this.page.getByRole('button', { name: 'Add Element' }).click();
        await this.page.getByRole('button',{name:'Delete'}).click()
    }
}
