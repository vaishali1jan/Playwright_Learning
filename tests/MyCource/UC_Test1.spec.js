import { test, expect } from '@playwright/test'


test("UC_test1 @Udemy", async ({ browser }) => {
    const context = await browser.newContext()
    const page = await context.newPage();
    await page.goto("https://google.com/")
    expect(await page).toHaveTitle("Google")

})

test("UC_test2 @Udemy", async ({ browser }) => {
    const context = await browser.newContext()
    const page = await context.newPage();
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/")
    expect(await page).toHaveTitle("LoginPage Practise | Rahul Shetty Academy")
    await page.locator("#username").fill("rahulshetty")
    await page.locator("[name='password']").type("learning")
    await page.locator("#signInBtn").click()
    console.log(await page.locator("[style*='block']").textContent())
    expect(await page.locator("[style*='block']")).toHaveText("Incorrect username/password.")

})

test("UC_test3 @Udemy", async ({ browser }) => {
    const context = await browser.newContext()
    const page = await context.newPage();
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/")
    expect(await page).toHaveTitle("LoginPage Practise | Rahul Shetty Academy")
    await page.locator("#username").fill("rahulshettyacademy")
    await page.locator("[name='password']").type("learning")
    await page.locator("#signInBtn").click()
    console.log(await page.locator(".card-body a").nth(0))
    //const totalname= await page.locator(".card-body a").allTextContents();
    const totalname = page.waitForSelector(".card-body a")
    const a = totalname.allTextContents();
    console.log(a)
    for (let i in a) {
        console.log(a[i])
    }
})


test("UC_test4 @Udemy", async ({ browser }) => {
    const context = await browser.newContext()
    const page = await context.newPage();
    await page.goto("https://rahulshettyacademy.com/client/")
    expect(await page).toHaveTitle("Let's Shop")
    await page.locator("#userEmail").fill("kheopsautomation@gmail.com")
    await page.locator("#userPassword").type("Learning@123")
    await page.locator("#login").click()
    console.log(await page.locator(".card-body b").nth(0).textContent())
    //await page.waitForLoadState('networkidle')
    await page.locator(".card-body b").last().waitFor()
    const totalname = await page.locator(".card-body b").allTextContents();
    console.log(totalname)
    for (let i in totalname) {
        console.log(totalname[i])
    }
})


test("UC_test5 @Udemy", async ({ page }) => {
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/")
    expect(await page).toHaveTitle("LoginPage Practise | Rahul Shetty Academy")
    await page.locator("#username").fill("rahulshettyacademy")
    await page.locator("[name='password']").type("learning")
    await page.locator("select.form-control").selectOption("Teacher")

    await page.locator(".customradio .checkmark").last().check()
    expect(await page.locator(".customradio .checkmark").last()).toBeChecked()
    console.log(await page.locator(".customradio .checkmark").last().isChecked())
    //await page.locator("#signInBtn").click()
})

test("UC_MultipleTab @Udemy", async ({ browser }) => {
    const context = await browser.newContext()
    const page = await context.newPage();
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/")

    const doculink = await page.locator("[href*='documents-request']")
    const [page1] = await Promise.all(
        [
            context.waitForEvent('page'),
            doculink.click(),
        ])
    console.log(await page1.locator(".auto-container .inner-box").textContent())
    expect(await page1.locator(".auto-container .inner-box")).toHaveText("Documents request")


})
