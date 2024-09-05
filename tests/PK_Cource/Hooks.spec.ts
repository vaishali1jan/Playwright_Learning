//const { test1 , expect1 } = require ('@playwright/test')
import{ test , expect } from '@playwright/test';

let context;
let page;

test.beforeAll(async ({browser}) => {
context= await browser.newContext()
await context.tracing.start(

    {
        snapshot: true,
        screenshots: true
    }
);
page= await context.newPage();


})

test.afterAll(async () => {

    await context.tracing.stop({path: 'vmLogin.zip'})
})

test ('FMS Login', async ({})=>{

    await page.goto('https://dev.fms.exfonova.com/')
    await expect(page).toHaveTitle('Sign in to EXFO RFTM')
    await page.getByLabel('Username or email').fill('user');
    await page.getByLabel('Password').fill('user');
    await page.getByRole('button', { name: 'Sign In' }).click();

    })


