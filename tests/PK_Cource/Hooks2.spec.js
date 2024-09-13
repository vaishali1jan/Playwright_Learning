
import { test, expect } from '@playwright/test';


// test.beforeAll('Launch', async ({ page }) => {

//     await page.goto('https://dev.fms.exfonova.com/')
// })

test.beforeEach('FMS Login', async ({ page }) => {

    await page.goto('https://dev.fms.exfonova.com/')
    await expect(page).toHaveTitle('Sign in to EXFO RFTM')
    await page.getByLabel('Username or email').fill('user');
    await page.getByLabel('Password').fill('user');
    await page.getByRole('button', { name: 'Sign In' }).click();
    await page.waitForSelector('text=Welcome', { timeout: 5000 })

})

test.afterEach('logout', async ({ page }) => {

    await page.getByRole('button', { name: 'Welcome' }).click();
    await page.locator('a').filter({ hasText: 'Log out' }).click();
})


test('GotoRoutepage', async ({ page }) => {

    await page.getByRole('button', { name: 'Routes', exact: true }).click();
    await page.getByRole('textbox', { name: 'Name' }).fill('vm001');
    await page.getByRole('textbox', { name: 'Name' }).press('Enter');
    await page.getByRole('link', { name: 'vm001' }).click();
})

test('GotoAlarm', async ({ page }) => {

    await page.getByTitle('Open Menu').click();
    await page.getByRole('link', { name: 'Alarms' }).click();
})

// test.afterAll('closeBrowser', async ({ page }) => {

//     await p