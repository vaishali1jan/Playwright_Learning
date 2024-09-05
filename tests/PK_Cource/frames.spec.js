import{test,expect} from '@playwright/test'
import { Console } from 'console';
import { describe } from 'node:test'

describe('gg',()=>{

    test('alarmfilter', async({page}) =>{
        await page.goto('https://endtoend.fms.exfonova.com/');
        await expect(page).toHaveTitle('Sign in to EXFO RFTM')
        await page.fill("//input[@id='username']",'user')
        await page.type("#password",'User#1234')
        await page.click("#kc-login")
      
      const a = await page.frames()
      console.log(a.length )
      console.log(a.u )


    })
})