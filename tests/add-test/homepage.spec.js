//Test1 OrangeHRM : 11-09-2025

const {test, expect} = require('@playwright/test');

test('verify page load test', async ({page}) =>{
    const url = 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login';
    await page.goto(url);
    await expect(page).toHaveTitle(/OrangeHRM/);
    console.log("Page loaded successfully and title verified.");


})
