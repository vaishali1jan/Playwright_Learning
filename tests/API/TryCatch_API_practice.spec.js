
import { test, expect } from '@playwright/test'

test.describe.configure({ mode: 'serial' })
{
    test('@API test1', async ({ page }) => {

        try {
            const data = await fetch("https://api.github.com/users/emails")
            let res = await data.json()
            expect(res.type).toBe("User")
            //console.log(res)
        }
        catch (err) {
            console.log("Error: " + err)
        }
    })

    test('@API test2', async ({ page }) => {
        const data = await fetch("https://api.github.com/users/emails")
        let res = await data.json()
        expect(res.type).toBe("User")
        //console.log(res)
    })

    test("Login @smoke", async ({ page }) => {
        await page.goto("https://practice.expandtesting.com/")
        await page.locator("//a[normalize-space()='Test Login Page']").click();
        await expect(page).toHaveTitle("Test Login Page for Automation Testing Practice")
        await page.locator("//input[@id='username']").fill("practice");
        await page.locator("//input[@id='password']").fill("SuperSecretPassword!");
        await page.locator("button[type='submit']").click()
        await expect(page.locator("#flash")).toHaveText("You logged into a secure area!")
    })
}

