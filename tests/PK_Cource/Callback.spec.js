


import { test, expect } from '@playwright/test';

test('Test1@sanity', async () => {
    console.log("Main Test function")
    a(function (){

        console.log("Step2")
    })
})

function a(){

    console.log("Step1")
}



