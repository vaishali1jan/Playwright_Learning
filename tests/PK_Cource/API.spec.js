import { test, expect } from '@playwright/test';

test('API_Post', async ({ request }) => {

    const response = await request.put("http://10.144.228.110:8089/api/system/loginBanner", {
        data: { isEnabled: true, message: 'updated by automation' }

    })
    expect(response.status()).toBe(204)
    expect(response.statusText()).toBe("No Content")
    const text = await response.text()
    //const text= response.body
    //expect(text).toContain('updated by automation')
    console.log(await response.json())
})


test('API_Get', async ({ request }) => {

    const response = await request.get("http://10.144.228.110:8089/api/system/loginBanner")
    expect(response.status()).toBe(200)
    expect(response.statusText()).toBe("OK")
    const text = await response.text()
    //const text= response.body
    expect(text).toContain('updated by automation')
    console.log(await response.json())
})