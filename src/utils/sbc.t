import { JsonReader } from '../utils/JsonReader';
import {testdata } from '../../resources/testdata.json'
await this.page.fill(locators.username, testdata.username);

const data = JsonReader.read('resources/testdata.json');
as we discussed to develop utils, even after developing utils still we are importing similar to import {testdata } from '../../resources/testdata.json'
anyhow we are preparing json testdata files for loginpage, employee, any other as well also we need to importing.
---------------------------------------------------------------
git init
git status
git add .
git commit -m "Initial Playwright TypeScript framework"
git remote add origin https://github.com/AvudurthiRamesh/playwright-typescript-lab.git
git branch -M main
git push -u origin main
