//import { test, expect, request } from '@playwright/test'

import { test, expect, request } from '@playwright/test'
import { APIUtils } from '../utils/APIUtils';
const tokenData = { userEmail: "kheopsautomation@gmail.com", userPassword: "Learning@123" }
const createorderData = { orders: [{ country: "Cuba", productOrderedId: "6581ca399fd99c85e8ee7f45" }] }
let response;


test.beforeAll('LoginToken @API_UC', async ({ }) => {
    const apicontext = await request.newContext()
    const apiUtils = new APIUtils(apicontext, tokenData)
    response = await apiUtils.createOrder(createorderData)
})


test("UC_OrderViewOnUI @Udemy", async ({ page }) => {``

    page.addInitScript(value => {
        window.localStorage.setItem('token', value)
    }, response.token)

    await page.goto("https://rahulshettyacademy.com/client/")
    await page.locator(".btn.btn-custom[routerlink='/dashboard/myorders']").click();
    await page.waitForSelector("text='Your Orders'", { timeout: 4000 })
    let rows = await page.locator("tbody tr").count()
    let column = await page.locator("tbody tr:nth-child(1) td").count()
    console.log(rows)
    for (let i = 1; i < rows; i++) {
        const locator = "tbody tr:nth-child(" + i + ") th"
        let rowID = await page.locator(locator).textContent();
        console.log(rowID)
        if (rowID === response.myorderID) {
            const locator1 = "tbody tr:nth-child(" + i + ") td:nth-child(6) button"
            await page.locator(locator1).click();
            break;
        }
    }

    await page.waitForSelector("text='order summary'", { timeout: 4000 })
    console.log(await page.locator(".title").textContent())
})
