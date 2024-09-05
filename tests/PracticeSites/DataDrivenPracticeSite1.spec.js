const { describe, beforeEach } = require("node:test");
const { practicepage } = require("../pages/practiceSite");
import{test, expect} from '@playwright/test'
const datafile= JSON.parse(JSON.stringify(require("../../Database/mydata.json")))

describe("DDTTests",()=>{


    test.beforeEach("Navigate",async({page})=>{

        const GotoURl= new practicepage(page);
        await GotoURl.Navigate();

    })

    test("TotalOptions",async({page})=>{

        await expect(page.locator("//div[@class='col-md-3 mb-2']")).toHaveCount(85)

    })
    test("Login",async({page})=>{
        const GotoURl= new practicepage(page);
        await GotoURl.GotoOption("Test Login Page")
        await GotoURl.Login(datafile.username,datafile.password)
        await expect(page.locator("#flash")).toHaveText("You logged into a secure area!")

    })

    test("InvalidLogin",async({page})=>{
        
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
