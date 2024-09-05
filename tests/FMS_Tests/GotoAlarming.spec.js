import { test, expect } from '@playwright/test';

test.use({
  viewport: {
    height: 720,
    width: 1280
  }
});

test('test', async ({ page }) => {
  await page.goto('https://endtoend.fms.exfonova.com/');
  await expect(page).toHaveTitle('Sign in to EXFO RFTM')
  await page.fill("//input[@id='username']",'user')
  await page.type("#password",'User#1234')
  await page.click("#kc-login")
  //await page.click("#kc-lodfgdfgdfgin")


  await page.getByRole('button', { name: 'Open Menu' }).click();
  await page.getByRole('link', { name: 'Alarms' }).click();
  await page.getByText('alarm', { exact: true }).click();
  await page.getByPlaceholder('sec').click();
  await page.getByPlaceholder('sec').fill('60');
  await page.getByPlaceholder('sec').press('Enter');
  await page.getByText('60 seconds set for auto-').click();
  const message = await page.getByText('60 seconds set for auto-')
  expect(message).toHaveText("60 seconds set for auto-refresh custom time");
});