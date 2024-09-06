import { test, expect } from '@playwright/test'
import { describe } from 'node:test'

describe("API Requests", () => {


    test.skip("SampleGet", async ({ request }) => {
        const res = await request.get("https://jsonplaceholder.cypress.io/comments")
        expect(res.status()).toBe(200)
        expect(res.statusText()).toBe("OK")

        const text = await res.json()   //to read data from response save it as Json
        const email = text[0].email
        expect(email).toBe("Eliseo@gardner.biz")
        console.log(email)
    })

    test.skip("SamplePost", async ({ request }) => {
        const res1 = await request.post("https://jsonplaceholder.cypress.io/comments", {
            body: {
                name: "Vaishali",
                email: "test@test.com",
                body: "is json object"
            }
        }
        )
        console.log(await res1.json())
        expect(res1.status()).toBe(201)
        const resJson = await res1.json()
        console.log(resJson)
        console.log(resJson.name)
        expect(resJson.id).toBe(501)
    })


    test.skip("POST_Token", async ({ request }) => {
        let payload = {
            "client_id": "fg-topologyapi",
            "username": "user",
            "password": "User#1234",
            "grant_type": "password",
            "client_secret": "493f468b-9ceb-4139-8910-89d7b178c58f"
        }

        let payload2 = "client_id:fg-topologyapi,username:user,password:User#1234,grant_type:password,client_secret:493f468b-9ceb-4139-8910-89d7b178c58f"
        const ToeknRes = await request.post("https://auth.endtoend.fms.exfonova.com/auth/realms/Fiber/protocol/openid-connect/token",
            {
                data: payload2,
                headers: {
                    'Content-Type': "application/x-www-form-urlencoded",
                }
            }
        )
        const TokenRes = await ToeknRes.json()
        console.log(TokenRes)
        expect(ToeknRes.status()).toBe(200)
        Token = TokenRes.access_token
    })

    let SiteID;
    test.only("POSTSite", async ({ request }) => {
        let payload = {
            name: "VPMSite2",
            description: "End"
        }

        const PostSite1 = await request.post("https://api.endtoend.fms.exfonova.com/api/topology/sites/",
            {
                data: payload,
                headers: {
                    'Content-Type': "application/x-www-form-urlencoded",
                    'Authorization': "Bearer " + Token
                }
            }
        )
        const TokenRes = await PostSite1.json()
        console.log(TokenRes)
        expect(PostSite1.status()).toBe(201)
        Token = TokenRes.access_token
        SiteID = TokenRes.site.id
        console.log(SiteID)
    })
})