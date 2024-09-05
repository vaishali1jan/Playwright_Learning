import { test, expect } from '@playwright/test'

let page;
test('locatorsTest', async ({ page }) => {

    await page.goto('https://dev.fms.exfonova.com/')
    await expect(page).toHaveTitle('Sign in to EXFO RFTM')
    //await page.pause();

    // With Xpath
    // await page.locator("//input[@id='username']").fill('user')
    // await page.locator("//input[@id='password']").fill('user')

    // //With CSS selectors 
    // await page.locator("#username").fill('user')
    // await page.locator("#password").fill('user')

    //With Attributes
    await page.locator("id=username").fill('user')
    await page.locator("id=password").fill('user')

    //With Text
    //await page.locator("text=Sign In").click();
    await page.locator('input:has-text("Sign In")').click();

    await page.waitForSelector('text=Welcome', { timeout: 4000 })
    await page.waitForURL('https://dev.fms.exfonova.com/#/dashboard/monitoring/system')
    await page.close();


})