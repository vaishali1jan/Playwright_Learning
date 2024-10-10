//import { test, expect, request } from '@playwright/test'

import { test, expect, request } from '@playwright/test'
const tokenData = { userEmail: "kheopsautomation@gmail.com", userPassword: "Learning@123" }
const createorderData = { orders: [{ country: "Cuba", productOrderedId: "6581ca399fd99c85e8ee7f45" }] }
let token;
let myorderID;


test.beforeAll('LoginToken @API_UC', async ({ }) => {
    const apireqiest = await request.newContext()
    const res = await apireqiest.post("https://rahulshettyacademy.com/api/ecom/auth/login",
        {
            data: tokenData
        }
    )
    const reJson = await res.json()
    token = reJson.token
    console.log(token)
})


test('CerateOrder @API_UC', async ({ }) => {
    const apireqiest = await request.newContext()
    const res = await apireqiest.post("https://rahulshettyacademy.com/api/ecom/order/create-order",
        {
            headers: { 'Authorization': token, 'content-type': 'application/json' },
            data: createorderData
        }
    )
    const reJson = await res.json()
    console.log(res.status())
    console.log(res.statusText())
    console.log(reJson.orders[0])
    myorderID = reJson.orders[0]
    console.log(reJson)
})



test("UC_OrderViewOnUI @Udemy", async ({ page }) => {

    page.addInitScript(value => {

        window.localStorage.setItem('token', value)
    }, token)

    await page.goto("https://rahulshettyacademy.com/client/")

    await page.locator(".btn.btn-custom[routerlink='/dashboard/myorders']").click();
    await page.waitForSelector("text='Your Orders'", { timeout: 4000 })
    let rows = await page.locator("tbody tr").count()
    let column = await page.locator("tbody tr:nth-child(1) td").count()
    console.log(rows)
    // await page.pause();
    for (let i = 1; i < rows; i++) {
        const locator = "tbody tr:nth-child(" + i + ") th"
        let rowID = await page.locator(locator).textContent();
        console.log(rowID)
        if (rowID === myorderID) {
            const locator1 = "tbody tr:nth-child(" + i + ") td:nth-child(6) button"
            await page.locator(locator1).click();
            break;
        }
    }

    await page.waitForSelector("text='order summary'", { timeout: 4000 })
    console.log(await page.locator(".title").textContent())
})
