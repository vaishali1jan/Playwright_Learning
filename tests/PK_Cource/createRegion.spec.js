import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
 
  await page.goto('https://endtoend.fms.exfonova.com/');
  await expect(page).toHaveTitle('Sign in to EXFO RFTM')
  await page.fill("//input[@id='username']",'user')
  await page.type("#password",'User#1234')
  await page.click("#kc-login")
  await page.getByLabel('Add a new Region').click();
  await page.getByPlaceholder('Insert the region name').fill('my Region');
  await page.getByPlaceholder('Insert the description region').fill('Add description');
  await page.getByLabel('Add new additional data to').click();
  await page.getByPlaceholder('Insert an additionnal key').fill('key');
  await page.getByPlaceholder('Insert an additionnal value').fill('value');
  await page.getByPlaceholder('Insert an additionnal key').fill('keddy');
  await page.getByLabel('Add a new region', { exact: true }).click();
  await page.getByLabel('Region saved, refresh in').click();
});