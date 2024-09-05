import{ test , expect } from '@playwright/test';
import exp from 'constants';
//import {FMSLogin} from './MyControls/reuse'

test('myAssertion',async ({page}) => {

    await page.goto('https://dev.fms.exfonova.com/')
    await expect(page).toHaveTitle('Sign in to EXFO RFTM')
    await page.getByLabel('Username or email').fill('user');
    await page.getByLabel('Password').fill('user');
    await page.getByRole('button', { name: 'Sign In' }).click();
    //page.waitForTimeout(3000)
    //await page.getByRole('button', { name: 'Monitoring' }).toBeVisible()
    await page.getByLabel('TreeView').getByRole('link', { name: 'System' }).click();


    await expect(page.getByLabel('TreeView').getByRole('link', { name: 'System' })).toContainText('System')
    await expect(page.getByLabel('TreeView').getByRole('link', { name: 'System' })).toBeVisible()
    await expect.soft(page.getByLabel('TreeView').getByRole('link', { name: 'System' })).toBeEnabled();
    await expect(page.getByLabel('TreeView').getByRole('link', { name: 'System' })).toHaveCount(1)
//await page.pause()
    await page.getByLabel('Add a new Region').click();
    //page.waitForTimeout(3000)
    await page.getByPlaceholder('Insert the region name').fill('vaishali region new');
    //page.waitForTimeout(3000)
    await page.getByPlaceholder('Insert the description region').fill('test');
    //page.waitForTimeout(3000)
   await page.getByLabel('Add new additional data to').click()
    await page.getByLabel('Add a new region', { exact: true }).click();
    //await page.pause()
    await expect(page).toHaveURL('https://dev.fms.exfonova.com/#/dashboard/monitoring/system')
    await expect(page).toHaveTitle('FMS')

    //await expect(page).toHaveScreenshot()
    
})