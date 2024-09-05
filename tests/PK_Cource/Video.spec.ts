import{ test , expect, chromium } from '@playwright/test';

test('slowno video on', async () =>{

    const browser = await chromium.launch({
       // slowMo: 500,
        headless: false
    });
    const context = await browser.newContext({
        recordVideo:{
            dir: 'videos/',
            size: {width:800 , height: 600}
        }
    });
    const page = await browser.newPage()

    await page.goto("http://10.144.228.110:8089/")
    await page.pause();
    await page.getByRole('textbox').first().fill('localadmin');
    await page.locator('input[type="password"]').fill('Admin123$');
    await page.getByRole('button', { name: 'Sign in' }).click();
    await page.close();
})