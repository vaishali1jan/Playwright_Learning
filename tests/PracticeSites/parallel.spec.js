import{test,expect} from '@playwright/test'

//test.describe.configure({mode:'parallel'})

test('parallel-TC01',async({page})=>{

console.log("Executing parallel-TC01 ")
await page.waitForTimeout(10000)

})

test('parallel-TC02',async({page})=>{

    console.log("Executing parallel-TC02")
    await page.waitForTimeout(10000)
    
})


test('parallel-TC03',async({page})=>{

    console.log("Executing parallel-TC03 ")
    await page.waitForTimeout(10000)
        
 })

 test('parallel-TC04',async({page})=>{

    console.log("Executing parallel-TC04 ")
    await page.waitForTimeout(10000)
        
 })

 test('parallel-TC05',async({page})=>{

    console.log("Executing parallel-TC05 ")
    await page.waitForTimeout(10000)
        
 })