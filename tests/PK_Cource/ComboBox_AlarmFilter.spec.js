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
        await page.getByRole('link', { name: 'Alarms' }).click();
        await page.locator("//img[@class='collapser-icon']").click();
        await page.locator("//mat-form-field[@id='alarmFilterByType']").click();
        await page.waitForTimeout(5000)
        await  selectType(page,"reflectance")
        await selectType(page,"Power")
        await selectType(page,"Temperature")
        

       await page.locator("#applyFilterButton").click();
       await page.waitForTimeout(5000)
       await page.locator("//button[normalize-space()='APPLY']", { timeout: 3000 }).click()
       
        


    })
})

async function selectType(page,typeofalarm)
{
    const typelist =  await page.$$("//mat-option[contains(@class,'alarm-mat-select-option')]")
    console.log(typelist.length);
    for(let i of typelist)
    {
     const nameofFilter= await i.textContent()
     console.log(nameofFilter )
     if (nameofFilter.includes(typeofalarm))
     {
         await i.click();
         break;
     }
    } 
}