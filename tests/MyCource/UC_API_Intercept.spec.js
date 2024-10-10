//import { test, expect, request } from '@playwright/test'

import { test, expect, request } from '@playwright/test'
import { APIUtils } from '../utils/APIUtils';
const tokenData = { userEmail: "kheopsautomation@gmail.com", userPassword: "Learning@123" }
const createorderData = { orders: [{ country: "Cuba", productOrderedId: "6581ca399fd99c85e8ee7f45" }] }
const emptyorderPlayload= {data: [], message: "No Orders"}
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

    await page.goto("https://rahulshettyacademy.com/client/");
 await page.route("https://rahulshettyacademy.com/api/ecom/order/get-orders-for-customer/670025f5ae2afd4c0b8f581d",
    async route =>{
        //intercepting responce
       const responce = await  page.request.fetch(route.request()); //capture responce
       let body = emptyorderPlayload
       route.fulfill(
        {
            responce,
            body,
        }
       ); //forward response to browser

    }
 )

    await page.locator(".btn.btn-custom[routerlink='/dashboard/myorders']").click();
    const emptymesg =await page.waitForSelector(".mt-4.ng-star-inserted", { timeout: 4000 })

    console.log(await emptymesg.textContent())
})
