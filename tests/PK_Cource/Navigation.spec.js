import { test, expect } from '@playwright/test'

test ('My First Test', async ({page}) => {

    await page.goto('https://dev.fms.exfonova.com/')
    //await expect(page).toHaveTitle('Google')
    await page.pause()
    await expect(page).toHaveScreenshot()
    
});