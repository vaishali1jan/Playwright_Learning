import{test,expect} from '@playwright/test'
const { describe } = require("node:test");

 describe("FlidpcartTEsts",()=>{

test('GotoFdlipcart',async({page})=>{

    await page.goto("https://www.flipkart.com/")
    await page.locator("//div[@aria-label='Fashion']").hover()
     let abc = await page.locator("//a[@class='_1BJVlg _11MZbx']")
     await page.pause()
     console.log(abc.length)
     await page.getByText('Woomen Footware').click()
     
})

 })