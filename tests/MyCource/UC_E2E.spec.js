import { test, expect } from '@playwright/test'
import exp from 'constants';


test.only("UC_E2E @Udemy", async ({ browser }) => {
    const productToBuy = "ZARA COAT 3";
    const context = await browser.newContext()
    const page = await context.newPage();
    await page.goto("https://rahulshettyacademy.com/client/")
    expect(await page).toHaveTitle("Let's Shop")
    await page.locator("#userEmail").fill("kheopsautomation@gmail.com")
    await page.locator("#userPassword").type("Learning@123")
    await page.locator("#login").click()
    //console.log(await page.locator(".card-body b").nth(0).textContent())
    await page.waitForLoadState('networkidle')
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
    await page.locator("[routerlink='/dashboard/cart'] label").click();
    await page.locator("div li").last().waitFor()
    const CartProducts = await page.locator("div ul li [class='cartSection']")
    //console.log(await CartProducts.count())
    for (let i = 0; i < await CartProducts.count(); i++) {
        expect(await page.locator("h3:has-text('ZARA COAT 3')").isVisible()).toBeTruthy();
        // if (await CartProducts.nth(i).locator("h3").textContent()==productToBuy)
        // expect(await CartProducts.nth(i).locator("h3").textContent()).toHaveText(productToBuy)
    }

    await page.getByText("Checkout").click();
    //await page.getByPlaceholder("Select Country").fill("india")
    await page.getByPlaceholder("Select Country").pressSequentially("ind")
    await page.waitForSelector("span:has-text('India')",{timeout:4000})
    await page.locator("span:has-text(' India')").first().click();
    
    await page.getByText("Place Order").click();
    await page.locator(".hero-primary").waitFor();

    expect (await page.locator(".hero-primary")).toHaveText("Thankyou for the order.")
//await page.pause();
    const orderID= await page.locator("label[class='ng-star-inserted']")
    //console.log(await orderID.count())
    let orderIDNumber;
    for(let i=0;i<await orderID.count();i++)
    {
        orderIDNumber= await orderID.nth(i).textContent()
        //console.log(orderIDNumber)
    }
 
     let orderIDNumber1= orderIDNumber.split("|")
     let myID = orderIDNumber1[1]
     myID= myID.trim()
     //console.log(myID)
    await page.locator(".btn.btn-custom[routerlink='/dashboard/myorders']").click();
    await page.waitForSelector("text='Your Orders'",{timeout:4000})
    let rows= await page.locator("tbody tr").count()
    let column= await page.locator("tbody tr:nth-child(1) td").count()
    console.log(rows)
   // await page.pause();
    for (let i=1;i<rows;i++)
    {
        const locator="tbody tr:nth-child("+i+") th"
        let rowID= await page.locator(locator).textContent();
        console.log(rowID)
        if (rowID===myID)
        {
            const locator1= "tbody tr:nth-child("+i+") td:nth-child(6) button"
            await page.locator(locator1).click();
            break;
        }
    }

    await page.waitForSelector("text='order summary'",{timeout:4000})
    console.log( await page.locator(".title").textContent())

})