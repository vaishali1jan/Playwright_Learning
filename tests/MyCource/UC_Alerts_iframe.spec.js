import { test,expect } from '@playwright/test'


test("UC_Alerts @Udemy",async({page})=>{

await page.goto("https://rahulshettyacademy.com/AutomationPractice/")

//page.on('dialog',dialog =>dialog.accept())

page.on('dialog',async dialog =>{
    console.log( await dialog.message())
    dialog.dismiss()

})


})


test.only("UC_iframe @Udemy",async({page})=>{

    await page.goto("https://rahulshettyacademy.com/AutomationPractice/")
    

    
    const iframetest=  page.frameLocator("#courses-iframe")
    await iframetest.getByText(".btn.btn-theme.btn-sm.btn-min-block").click()
    await page.pause()
    
    })