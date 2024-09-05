import{test,expect} from '@playwright/test'
import { Console } from 'console';
import { describe } from 'node:test'

describe('gg',()=>{

    test('alarmfilter', async({page}) =>{
        await page.goto('https://endtoend.fms.exfonova.com/');
        await expect(page).toHaveTitle('Sign in to EXFO RFTM')
        await page.fill("//input[@id='username']",'user')
        await page.type("#password",'User#1234')
        await page.click("#kc-login")
      
      
        await page.getByRole('button', { name: 'Open Menu' }).click();
        await page.locator("//a[@routerlink='/TaskDashboard']").click();
        await page.locator("(//button[@aria-label='Navigate to Task Details'])[9]").click()

        page.on('dialog',async dialog=>{

            expect(dialog.type().toContain('alert'))
            expect(dialog.message()).toContain("Optical Route Measurements")
            await dialog.accept()
        })

       await page.waitForTimeout(5000)
        await page.locator("(//button[@class='button-link-style ng-star-inserted'][normalize-space()='View'])[1]").click();
 await page.waitForTimeout(5000)

    })
})


