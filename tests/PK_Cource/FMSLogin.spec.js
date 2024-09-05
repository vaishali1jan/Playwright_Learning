const { describe } = require("node:test");
const {test,expect}=require('@playwright/test')

describe('FMSLogin',()=>{

    test('Test1',async({page})=>{
       await page.goto('https://endtoend.fms.exfonova.com/');
       await expect(page).toHaveTitle('Sign in to EXFO RFTM')
       await console.log(page.title())
      // await expect(page).textContent('EXFO')
       await page.close();
       page.locator()

//

    })
})