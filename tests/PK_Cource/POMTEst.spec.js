import{test,expect} from '@playwright/test'
import { loginFMS } from './pages/Login'
import { PForm } from './pages/PracticeForm';
import { RegUser } from './pages/Register';



let page;
test.beforeEach(async ({browser})=>{
 page= await browser.newPage()
    page.pause();
    const LoginVaishali= new loginFMS(page)
    await LoginVaishali.GotoURL();
    await expect.soft(page).toHaveTitle('Selenium Practice - Login')
    await LoginVaishali.LoginA("user","user")
    await expect( page.locator("//label[contains(@id,'password-error')]")).toHaveText("Please enter at least 5 characters.")
})

test('POmTest1',async({})=>{
    const FillFormobj= new PForm(page)
    await FillFormobj.FillForm("user")
    await expect.soft(page.locator("//label[@id='dob-error']")).toHaveText("This field is required.")
})

test('POmTest2',async({})=>{
    const FillFormobj= new RegUser(page)
    await FillFormobj.register("user")
    await expect.soft(page.locator("//input[@value='Register']")).toBeEnabled();
})