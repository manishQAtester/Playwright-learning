//this code is for json data fetch
import {test,expect} from '@playwright/test';
import testdata from '../testdata.json';

test.describe("data driven login test",function(){

for (const data of testdata)
{
    test(`login with user: ${data.username}`,async({page})=>{
       
            await page.goto("https://www.saucedemo.com/");
            
            await page.locator('[data-test="username"]').fill(data.username) 
            await page.locator('[data-test="password"]').fill(data.password)
            await page.locator('[data-test="login-button"]').click();


            await page.getByRole('button', { name: 'Open Menu' }).click();
            await page.locator('[data-test="logout-sidebar-link"]').click();  
    })
}
})






// this code is for csv file data fetch :=====>
// import {test,expect} from '@playwright/test';
// import fs from 'fs';
// import {parse} from 'csv-parse/sync';


// const csvfile = fs.readFileSync('testdata.csv', 'utf8').replace(/^\uFEFF/, '');;
// const records = parse(csvfile,{
//         columns: true,
//         skip_empty_lines: true,
//     });

// test.describe("data driven login test",function(){

// for (const record of records){
//     test(`login with user: ${record.id}`,async({page})=>{
       
//             await page.goto("https://www.saucedemo.com/");
            
//             await page.locator('[data-test="username"]').fill(record.username) 
//             await page.locator('[data-test="password"]').fill(record.password)
//             await page.locator('[data-test="login-button"]').click();


//             await page.getByRole('button', { name: 'Open Menu' }).click();
//             await page.locator('[data-test="logout-sidebar-link"]').click();  
//     })
// }
// })