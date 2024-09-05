import { test, expect } from '@playwright/test'

test.skip ('FMS Login', async ({page})=>{

    await page.goto('https://dev.fms.exfonova.com/')
    await expect(page).toHaveTitle('Sign in to EXFO RFTM')
    await page.getByLabel('Username or email').fill('user');
    await page.getByLabel('Password').fill('user11');
    await page.getByRole('button', { name: 'Sign In' }).click();
    //await page.getByRole('button', { name: 'Monitoring' }).toBeVisible()
    await page.getByLabel('TreeView').getByRole('link', { name: 'System' }).click();
    await page.getByLabel('Add a new Region').click();
    await page.getByPlaceholder('Insert the region name').fill('vaishali region');
    await page.getByPlaceholder('Insert the description region').fill('test');
    await page.getByLabel('Add a new region', { exact: true }).click();
    })



    test.skip('RTUlogin110',async({page})=>{

        await page.goto("http://10.144.228.110:8089/")
        await page.pause();
        await page.getByRole('textbox').first().fill('localadmin');
        await page.locator('input[type="password"]').fill('Admin123$');
        await page.getByRole('button', { name: 'Sign in' }).click();
        await page.close();
    })


    // test('RTUlogin110',async({page})=>{

    //     test.fail()
    // })

    // test.fixme('RTUlogin110',async({page})=>{

    // })

    test('RTUlogin67',async({page})=>{

        await page.goto("http://10.144.229.67:8089/")
        await page.pause();
        await page.getByRole('textbox').first().fill('localadmin');
        await page.locator('input[type="password"]').fill('Admin123$');
        await page.getByRole('button', { name: 'Sign in' }).click();
        await page.close();
    })