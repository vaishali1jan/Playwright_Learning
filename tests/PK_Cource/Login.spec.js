import{ test , expect } from '@playwright/test';
import{Loginpage} from '../pages/login'

test('login' , async({page})=>{

   
    const Login = new Loginpage()
   // await Login.gotoRTU()
    
    await page.goto('http://10.144.228.110:8089/');
    await delay (3000)
    page.pause()
    await Login.LoginRTU("localadmin","Admin123$")


    // await page.goto('http://10.144.228.110:8089/');
    // await page.getByRole('textbox').first().fill('localadmin');
    // await page.locator('input[type="password"]').fill('Admin123$');
    // await page.locator('input[type="password"]').press('Enter');

    await expect( page.locator("(//div[@class='item__link'])[6]")).toContainText("Operating mode")
    //await expect.soft( page.locator("(//div[@class='item__link'])[5]")).toContainText("Operating mode")
    await expect( page.locator("(//div[@class='item__link'])[4]")).toContainText("Firmware")

})
