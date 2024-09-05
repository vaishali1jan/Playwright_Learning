import { test, expect } from '@playwright/test'

// test ('My First Test', async ({page}) => {

//     await page.goto('https://dev.fms.exfonova.com/')
//     //await expect(page).toHaveTitle('Google')
//     await page.pause()
//     await expect(page).toHaveScreenshot()
    
// });

test('has title', async ({ page }) => {
    await page.goto('https://playwright.dev/');
  
    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/Playwright/);
  });