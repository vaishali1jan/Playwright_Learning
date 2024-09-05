import { test, expect } from '@playwright/test';

// test.use({
//   viewport: {
//     height: 720,
//     width: 1280
//   }
// });

let page;
test.beforeEach(async ({browser})=>{
 page= await browser.newPage()
    await page.goto('https://endtoend.fms.exfonova.com/');
    await expect(page).toHaveTitle('Sign in to EXFO RFTM')
    await page.fill("//input[@id='username']",'user')
    await page.type("#password",'User#1234')
    await page.click("#kc-login")
})


test.afterEach(async()=>{
    await page.waitForTimeout(1000)
    await page.locator("//button[@id='dropdownUser']").click()
    await page.locator("//span[@class='fg-icons menu-item__user-logout-icon']").click()
    await page.waitForTimeout(1000)
    const hhh= await page.locator("label[for='username']", { timeout: 3000 })
    expect.soft(hhh).toHaveText("Username or email")
    await page.waitForTimeout(3000)
    await page.close()
})



test('alarmfilter', async() =>{

    await page.getByRole('button', { name: 'Open Menu' }).click();
    await page.getByRole('link', { name: 'Alarms' }).click();
    await page.locator("//img[@class='collapser-icon']").click();
    await page.locator("//mat-form-field[@id='alarmFilterByType']").click();
    await page.waitForTimeout(1000)
    await  selectType(page,"reflectance")
    await selectType(page,"Power")
    await selectType(page,"Temperature")
   await page.locator("#applyFilterButton").click();
   await page.waitForTimeout(1000)
   await page.locator("//button[normalize-space()='APPLY']", { timeout: 5000 }).click()
 
})

async function selectType(page,typeofalarm)
{
    const typelist =  await page.$$("//mat-option[contains(@class,'alarm-mat-select-option')]")
    console.log(typelist.length);
    for(let i of typelist)
    {
     const nameofFilter= await i.textContent()
     console.log(nameofFilter )
     if (nameofFilter.includes(typeofalarm))
     {
         await i.click();
         break;
     }
    } 
}

test('CreateRegion',async()=>{
    await page.getByLabel('Add a new Region').click();
    await page.screenshot({path:'tests/Screenshots/'+Date.now()+'Addregion.png'})
    await page.getByPlaceholder('Insert the region name').fill('my Region');
    await page.getByPlaceholder('Insert the description region').fill('Add description');
    await page.getByLabel('Add new additional data to').click();
    await page.getByPlaceholder('Insert an additionnal key').fill('key');
    await page.getByPlaceholder('Insert an additionnal value').fill('value');
    await page.getByPlaceholder('Insert an additionnal key').fill('keddy');
    await page.getByLabel('Add a new region', { exact: true }).click();
    await page.getByLabel('Region saved, refresh in').click();
    await page.waitForTimeout(5000)
  
})

test('GotoAlarming', async () => {

  await page.getByRole('button', { name: 'Open Menu' }).screenshot({path:'tests\Screenshots'+Date.now()+'openMenu.png'})
  await page.getByRole('button', { name: 'Open Menu' }).click();
  await page.getByRole('link', { name: 'Alarms' }).click();
  await page.getByText('alarm', { exact: true }).click();
  await page.getByPlaceholder('sec').click();
  await page.getByPlaceholder('sec').fill('60');
  await page.getByPlaceholder('sec').press('Enter');
  await page.getByText('60 seconds set for auto-').click();
  const message = await page.getByText('60 seconds set for auto-')
  expect(message).toHaveText("60 seconds set for auto-refresh custom time");
  
})

test('AlertiOLMViwer', async() =>{ 
    await page.getByRole('button', { name: 'Open Menu' }).click();
    await page.locator("//a[@routerlink='/TaskDashboard']").click();
    await page.screenshot({path:'tests\Screenshots'+Date.now()+'tasks.png',fullpage:true})
    await page.locator("(//button[@aria-label='Navigate to Task Details'])[9]").click()

//     page.on('dialog',async dialog=>{

//         expect(dialog.type().toContain('alert'))
//         expect(dialog.message()).toContain("Optical Route Measurements")
//         //await dialog.accept()
//         await dialog.dismiss();
//     })

//    //await page.waitForTimeout(5000)
//     await page.locator("(//button[@class='button-link-style ng-star-inserted'][normalize-space()='View'])[1]").click();
// //await page.waitForTimeout(5000)


})

// //on page
// await page.screenshot({path:'tests/Screenshots/'+Date.now()+'Addregion.png'})

// //On locator
// await page.getByRole('button', { name: 'Open Menu' }).screenshot({path:'tests\Screenshots'+Date.now()+'openMenu.png'})

// //Full page
// await page.screenshot({path:'tests\Screenshots'+Date.now()+'tasks.png',fullpage:true})
