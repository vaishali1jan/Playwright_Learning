import {test,expect} from '@playwright/test'

test('name',async({page})=>{

    const URL= "https://api.github.com/users/mojombo"
//const res= await fetch(URL);
const res=  fetch(URL);
//console.log(res)
//const userjson = await res.json()
//console.log(userjson)
//console.log(userjson.login)
//await fetch(URL).then(res => res.json()).then(res.json() => userjson)

res.then(function(data){
    console.log(data)
})

})