import { describe } from "node:test"
//import {test,expect} from ('@playwright/test')
const {test,expect}=require('@playwright/test')

//describe('Group1',()=>{
    describe('FMSLogin',()=>{

    test('InvalidLogin',async({page})=>{

    await page.goto('https://endtoend.fms.exfonova.com/');
    await expect(page).toHaveTitle('Sign in to EXFO RFTM')
    await page.locator("//input[@id='username']").fill('user')
    await page.locator("#password").fill('user')
    await page.click("#kc-login")
    await expect(page.locator("#input-error")).toHaveText("Invalid username or password.")
    await page.close();
    
})

test.only('ValidLogin',async({page})=>{

    await page.goto('https://endtoend.fms.exfonova.com/');
    await expect(page).toHaveTitle('Sign in to EXFO RFTM')
    await page.fill("//input[@id='username']",'user')
    await page.type("#password",'User#1234')
    await page.click("#kc-login")
    await expect(page.locator(".sidenav_header_label")).toHaveText("Navigation")
    const HelpOption = await page.locator('#dropdownInfo')
    await expect (HelpOption).toBeVisible();
    await page.waitForSelector("//td[@class='mat-mdc-cell mdc-data-table__cell cdk-cell mat-ripple link cdk-column-treenode mat-column-treenode ng-star-inserted']")
    const TotalRegions= await page.$$("//td[@class='mat-mdc-cell mdc-data-table__cell cdk-cell mat-ripple link cdk-column-treenode mat-column-treenode ng-star-inserted']")
    
    await expect (TotalRegions).toHaveLength(35)

    for(const i of TotalRegions )
    {
        //const regionName = await i.textContent()
        const regionName = await i.textContent()
        console.log(regionName)
        if (regionName =="Pune")
        {
            i.click();
            console.log("Pune region is clicked")
        }
        else
        {
            console.log("*")
        }
    }
    await page.close();
    
})





})