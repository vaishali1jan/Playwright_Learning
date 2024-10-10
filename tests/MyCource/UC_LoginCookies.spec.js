
import { test, expect, request } from '@playwright/test'

let webContext;

test.beforeAll("UC_loginInCookies", async ({ browser }) => {
    const context = await browser.newContext()
    const page = await context.newPage();
    await page.goto("https://rahulshettyacademy.com/client/")
    await page.locator("#userEmail").fill("kheopsautomation@gmail.com")
    await page.locator("#userPassword").type("Learning@123")
    await page.locator("#login").click()
    await page.waitForLoadState('networkidle')
    await context.storageState({path: 'loginCookies.json'})
    webContext =await browser.newContext({storageState:'loginCookies.json'})
})


test('TEstwithLoginCookies', async() => {
    const productToBuy = "ZARA COAT 3";
    const page = await webContext.newPage();
    await page.goto("https://rahulshettyacademy.com/client/")
    const myproducts = await page.locator(".card-body")
    const totalname = await page.locator(".card-body b").count()
    //console.log(totalname)
    for (let i = 0; i < totalname; i++) {

        const pName = await myproducts.nth(i).locator("b").textContent()
        if (pName === productToBuy) {
            await myproducts.nth(i).locator("text=Add To Cart").click()
            break;
        }
    }
    await expect(await page.locator("[routerlink='/dashboard/cart'] label")).toHaveText("1")
})