const { describe, beforeEach } = require("node:test");
const { practicepage } = require("../pages/practiceSite");
import{test, expect} from '@playwright/test'
import exp from 'constants';
const datafile= JSON.parse(JSON.stringify(require("../../Database/mydata.json")))

describe("DDTTests",()=>{

    test.beforeEach("Navigate @smoke",async({page})=>{

        const GotoURl= new practicepage(page);
        await GotoURl.Navigate();
        await expect(page).toHaveTitle("Practice Test Automation WebSite")
    })

    test("TotalOptions @smoke",async({page})=>{
        await expect(page.locator("//div[@class='col-md-3 mb-2']")).toHaveCount(85)
    })

    test("Login @smoke",async({page})=>{
        const GotoURl= new practicepage(page);
        await GotoURl.GotoOption("Test Login Page")
        await expect(page).toHaveTitle("Test Login Page for Automation Testing Practice")
        await GotoURl.Login(datafile.username,datafile.password)
        await expect(page.locator("#flash")).toHaveText("You logged into a secure area!")
    })

    test("InvalidLogin@Reg",async({page})=>{
        const GotoURl= new practicepage(page);
        await GotoURl.GotoOption("Test Login Page")
        await GotoURl.Login("user","user")
        await expect(page.locator("#flash")).toHaveText("Your username is invalid!")
    })

    test.afterEach("pageClose",async({page})=>{
        const GotoURl= new practicepage(page);
        await GotoURl.pageClose();
    })
})
