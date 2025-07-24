import { Given, When, Then } from '@cucumber/cucumber';
import {Browser, Page, chromium, expect } from '@playwright/test';

let browser: Browser;
let page: Page;

Given('A user launch the Saucelabs login page', async () =>{
  browser = await chromium.launch();  // if no headless mode: {headless:false}
  page = await browser.newPage();
  await page.goto('https://www.saucedemo.com/')
});

When('A user enters the username {string}, the password {string}, and clicks on the Login button', async(username: string, password: string) => {
  await page.getByRole('textbox', {name: "Username"}).fill(username)
  await page.getByRole('textbox', {name: "Password"}).fill(password)
  await page.getByRole('button', {name: "Login"}).click()
})

Then('A user will land at the inventory page', async() => {
  await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
  await browser.close();
})