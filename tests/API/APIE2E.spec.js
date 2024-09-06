import {test,expect} from '@playwright/test'
import { describe } from 'node:test'

describe("API Requests",()=>{


    test.skip("SampleGet",async({request})=>{

        const res= await request.get("https://jsonplaceholder.cypress.io/comments")
        expect(res.status()).toBe(200)
        expect(res.statusText()).toBe("OK")

        const text = await res.json()   //to read data from response save it as Json
        const email =text[0].email
        expect(email).toBe("Eliseo@gardner.biz")
        console.log(email)
    })

    test.skip("SamplePost",async({request})=>{

        const res1= await request.post("https://jsonplaceholder.cypress.io/comments",{
            body: {
                name: "Vaishali",
                email: "test@test.com",
                body: "is json object"
            }
        }
        )
        console.log(await res1.json())
        expect(res1.status()).toBe(201)
        const resJson= await res1.json()
        console.log(resJson)
        console.log(resJson.name)
        expect(resJson.id).toBe(501)
    })


    let Token= "eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJkQndFWVhZalRkQTN2eEJLZHVjZmxuajdMSmV5TmxDY2tXT1FoUDZGd3ljIn0.eyJleHAiOjE3MjU1OTMyNTQsImlhdCI6MTcyNTU5MjM1NCwianRpIjoiN2E1ZGI1OTctYjg5NS00NzVjLTg0ZGItMzdmNWQzYzc4MWQ1IiwiaXNzIjoiaHR0cHM6Ly9hdXRoLmVuZHRvZW5kLmZtcy5leGZvbm92YS5jb20vYXV0aC9yZWFsbXMvRmliZXIiLCJhdWQiOlsiZmctcmVzdWx0cyIsInJlYWxtLW1hbmFnZW1lbnQiLCJvdGRyIiwiZmctYWxhcm0iLCJob3N0d2VidWkiLCJhY2NvdW50Il0sInN1YiI6IjI3YmZmZDE2LWM0MzctNDc5NS1iMzczLTg0NGY5NmM5OGZiNCIsInR5cCI6IkJlYXJlciIsImF6cCI6ImZnLXRvcG9sb2d5YXBpIiwic2Vzc2lvbl9zdGF0ZSI6IjZhZjFmODVmLWRlYmEtNDUyYi04ZjIwLTBmOTdiYmYxNTA5ZCIsImFsbG93ZWQtb3JpZ2lucyI6WyJodHRwczovL2VuZHRvZW5kLmZtcy5leGZvbm92YS5jb20iXSwicmVhbG1fYWNjZXNzIjp7InJvbGVzIjpbImZnLXRlc3QtY29udHJvbC1zdGF0dXMiLCJtZWFzdXJlbWVudC1CQy11cGRhdGUiLCJhdG9taWMtZmliZXJUZXN0LWFkaG9jUkQiLCJmZy1hbGFybS1tYXN0ZXIiLCJmZy1naXMtbWFzdGVyIiwiZmctcmVzdWx0cy1tYXN0ZXIiLCJmZy1hbGFybS1hY3RpbmciLCJhdG9taWMtZmliZXJUZXN0LWVkaXRCYXNlbGluZSIsIm1hc3Rlcl9mdWxsIiwiYXRvbWljLWZpYmVyVGVzdC1STE51bGxpbmciLCJmZy10ZXN0LWNvbnRyb2wtbWFzdGVyIiwiZmctcmVzdWx0cy1yZWFkIiwiZmctZXMtYWRtaW5pc3RyYXRvciIsImF0b21pYy1maWJlclRlc3QtYWRob2MiLCJmZy10b3BvbG9neS1yZWFkIiwiYXRvbWljLWZpYmVyVGVzdC1vbkRlbWFuZCIsIm9mZmxpbmVfYWNjZXNzIiwidW1hX2F1dGhvcml6YXRpb24iLCJwdGlfcm9sZXMiLCJtZWFzdXJlbWVudC1CQy1jcmVhdGUiLCJmZy1zeXMtYWRtaW4iLCJhdG9taWMtZmliZXJUZXN0LWNyZWF0ZUJhc2VsaW5lIiwiZmllbGRfdGVjaF9jdXN0b20iLCJmZy1hbGFybS1hbGwiLCJhdG9taWMtZmliZXJUZXN0LXJlc2V0QmFzZWxpbmUiLCJmZy10b3BvbG9neS1tYXN0ZXIiLCJmZy1naXMtYWNjZXNzIiwiYXRvbWljLWZpYmVyVGVzdC1mYXN0VE9EIiwiYXRvbWljLWZpYmVyVGVzdC11cGRhdGVCYXNlbGluZSIsIm5vY19vcGVyYXRvciIsImZnLXRvcG9sb2d5LWZpZWxkdGVjaCIsImF0b21pYy1maWJlclRlc3QtdG9uZSIsImF0b21pYy1maWJlclRlc3QtYW5jaG9yIiwiZ3JhZmFuYS1hY2Nlc3MiLCJkZWZhdWx0LXJvbGVzLWZpYmVyIl19LCJyZXNvdXJjZV9hY2Nlc3MiOnsiZmctcmVzdWx0cyI6eyJyb2xlcyI6WyJmZy1yZXN1bHRzLXJlYWQiLCJmZy1yZXN1bHRzLW1hc3RlciJdfSwicmVhbG0tbWFuYWdlbWVudCI6eyJyb2xlcyI6WyJ2aWV3LWlkZW50aXR5LXByb3ZpZGVycyIsInZpZXctcmVhbG0iLCJtYW5hZ2UtaWRlbnRpdHktcHJvdmlkZXJzIiwiaW1wZXJzb25hdGlvbiIsInJlYWxtLWFkbWluIiwiY3JlYXRlLWNsaWVudCIsIm1hbmFnZS11c2VycyIsInF1ZXJ5LXJlYWxtcyIsInZpZXctYXV0aG9yaXphdGlvbiIsInF1ZXJ5LWNsaWVudHMiLCJxdWVyeS11c2VycyIsIm1hbmFnZS1ldmVudHMiLCJtYW5hZ2UtcmVhbG0iLCJ2aWV3LWV2ZW50cyIsInZpZXctdXNlcnMiLCJ2aWV3LWNsaWVudHMiLCJtYW5hZ2UtYXV0aG9yaXphdGlvbiIsIm1hbmFnZS1jbGllbnRzIiwicXVlcnktZ3JvdXBzIl19LCJmZy10b3BvbG9neWFwaSI6eyJyb2xlcyI6WyJmZy10b3BvbG9neS1yZWFkIiwiZmctdG9wb2xvZ3ktZmllbGR0ZWNoIiwiZmctdG9wb2xvZ3ktbWFzdGVyIl19LCJvdGRyIjp7InJvbGVzIjpbImZnLW5xbXN3ZWJvdGRyMi12aWV3IiwiZmctbnFtc3dlYm90ZHIyLWVkaXQiXX0sImZnLWFsYXJtIjp7InJvbGVzIjpbImZnLWFsYXJtLW1hc3RlciIsImZnLWFsYXJtLWFsbCIsImZnLWFsYXJtLWFjdGluZyJdfSwiaG9zdHdlYnVpIjp7InJvbGVzIjpbImZnLWhvc3R3ZWJ1aS12aWV3IiwiZmctaG9zdHdlYnVpLWVkaXQiXX0sImFjY291bnQiOnsicm9sZXMiOlsibWFuYWdlLWFjY291bnQiLCJtYW5hZ2UtYWNjb3VudC1saW5rcyIsInZpZXctcHJvZmlsZSJdfX0sInNjb3BlIjoicHJvZmlsZSBlbWFpbCBmbXNfY2xpZW50X3Njb3BlIiwic2lkIjoiNmFmMWY4NWYtZGViYS00NTJiLThmMjAtMGY5N2JiZjE1MDlkIiwiZm1zX2NsaWVudF9zY29wZV8yIjoiYWxsIiwiZm1zX3Njb3BlIjoiYWxsIiwidW5pdCI6IjEiLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsInRpbWVab25lU3VwcG9ydGVkIjoiNDciLCJuYW1lIjoiSm9obiBEb2UiLCJwcmVmZXJyZWRfdXNlcm5hbWUiOiJ1c2VyIiwibG9jYWxlIjoiZW4iLCJnaXZlbl9uYW1lIjoiSm9obiIsIm1pZGRsZV9uYW1lIjoiIiwiZmFtaWx5X25hbWUiOiJEb2UiLCJlbWFpbCI6ImV4Zm8uZm1zQGdtYWlsLmNvbSJ9.eYenRdEau5HxxJQFy0sC6es9epanJ-PjuL4GZltcWqE45eCHKuxPVmo_wekX5ucVZjbDCWYLxuaQNQk7CRrTOCHkyqhQtSMVZTA47bhoPUrkVywA4g_cjuk9cC6olSRBBEB4NSJAxpW_WUp8McqAmVzyYH3KX6dKhYif-gd3dWkdmG6La2wSEmmupdrHkIEfkdjoWgl7jUl1fLGsdvXk-_Lp09J-U0DUni45RCGRV2fJH2cpx8JDfBZz9sYi2Ao6F2IR_NM0uu8MK6rVK6bzgAiFe32vUJQei3KIPK6Mrq8DrXurrMd5To8W0mjykgVkf6uQKP81bUstoq74neFPUw"
    test.skip("POST_Token",async({request})=>{
            let payload= {
                "client_id":"fg-topologyapi",
                "username":"user",
                "password":"User#1234",
                "grant_type":"password",
                "client_secret":"493f468b-9ceb-4139-8910-89d7b178c58f"
            }

            let payload2= "client_id:fg-topologyapi,username:user,password:User#1234,grant_type:password,client_secret:493f468b-9ceb-4139-8910-89d7b178c58f"
           const ToeknRes= await request.post("https://auth.endtoend.fms.exfonova.com/auth/realms/Fiber/protocol/openid-connect/token",
                {
                    data:payload2,
                    headers: {
                        'Content-Type': "application/x-www-form-urlencoded",
                    }
                }
            )
            const TokenRes=await ToeknRes.json()
            console.log(TokenRes)
            expect(ToeknRes.status()).toBe(200)
            Token= TokenRes.access_token

    })

    let SiteID;
    test.only("POSTSite",async({request})=>{
        let payload= {
                    name: "VPMSite2",
                    description: "End"
        }

       const PostSite1= await request.post("https://api.endtoend.fms.exfonova.com/api/topology/sites/",
            {
                data:payload,
                headers: {
                    'Content-Type': "application/x-www-form-urlencoded",
                    'Authorization': "Bearer " + Token
                }
            }
        )
        const TokenRes=await PostSite1.json()
        console.log(TokenRes)
        expect(PostSite1.status()).toBe(201)
        Token= TokenRes.access_token
        SiteID = TokenRes.site.id
        console.log(SiteID)
    })
})