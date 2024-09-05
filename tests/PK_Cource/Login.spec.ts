const{test, expect} = require('@playwright/test')
//const { test } = require("node:test");

//const{hello, hello1} = require('./MyControls/reuse')
//import{ hello,hello1 } from './MyControls/reuse';
//console.log( hello())
//console.log( hello1())

test ('FMS Login', async ({page})=>{

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