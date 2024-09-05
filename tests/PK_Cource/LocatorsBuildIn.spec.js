import {test,expect} from '@playwright/test'
import { describe } from 'node:test'

describe('A',()=>{

    test ('one', async({page})=>{
        await page.goto('https://endtoend.fms.exfonova.com/');
        await expect(page).toHaveTitle('Sign in to EXFO RFTM')
        await page.fill("//input[@id='username']",'user')
        await page.type("#password",'User#1234')
        await page.click("#kc-login")
        
        //page.pause();
        //const rows = await page.getByLabel('ExpandSystemRegion').click()
        //const rows = await page.getByRole("row").click();

       
        await page.waitForSelector('#dropdownInfo')
        //await page.getByRole('button', { name: 'Go to top' }).click()

        await page.getByRole('button', { name: 'Welcome John' }).click()
        await page.getByText('Pune', { exact: true }).click()
  

    })
})