import { test, expect } from '@playwright/test'
import { beforeEach, describe } from 'node:test'
import { FMenus } from '../pages/flipcart'

describe('FlipcartTests', () => {

    let page;
    test.beforeEach(async ({ browser }) => {
        page = await browser.newPage()
        let Navigate = new FMenus(page)
        await Navigate.GotoFlipcart()    //using .env parameters
    })

    test.skip('Test1', async ({ }) => {
        let Fpage = new FMenus(page)
        await Fpage.GotoMobilePage()
        let lbl = await page.locator("._0FYq1K")
        await expect(lbl).toHaveText("Mobile Phones")
        awaitpage.pause()
        let RAMVAlues = await page.locator("body>div >div>div[class='JxFEK3 _48O0EI']>div[class='DOjaWF YJG4Cf']>div[class='cPHDOP col-2-12']>div[class='_0BvurA']>section:nth-child(8)")
        await expect.soft(RAMVAlues).toHaveText("ddd")

    })

    test('Test2', async ({ }) => {
        await page.locator("//input[@placeholder='Search for Products, Brands and More']").fill("samsung")
        await page.keyboard.press('Enter')
        //await page.waitForSelector("a[class='wjcEIp']")
        // await expect.soft(page.locator("a[class='wjcEIp']")).toHaveLength(40)
        // expect( AllNames)

        let fillbl = await page.locator("//div[@class='rgHxCQ']")
        await expect.soft(fillbl).toContainText('Filters')
        //await page.waitForSelector("//body[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/section[1]/div[2]/div[2]")
        // await expect.soft(page.locator("a[class='_9Wy27C'] span")).toHaveText("Cart")
        //console.log(b.textContent().catch((e) => console.log(e)))
        // for(const i of AllNames )  
        //    { console.log( i.textContent())}
    })
})