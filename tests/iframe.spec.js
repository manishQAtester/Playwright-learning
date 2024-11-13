import { test} from "@playwright/test";
test('iframe demo',async ({page})=>{
 
//    await page.goto("https://www.flipkart.com/");
// //    await page.waitForTimeout(60000);
//    await page.locator("//*[@id='container']/div/div[1]/div/div/div/div/div[1]/div/div/div/div[1]/div[1]/header/div[1]/div[2]/form/div/div/input").fill("apple phone");
//    await page.keyboard.press('Enter');
//    await page.pause();
   
   const w3frame = page.frame({url:'https://www.javatpoint.com/html-iframes'})
   await w3frame.locator("#compiler_textarea_de097140-c88d-4844-b697-6d7691ff4fbe").click();
//    await page.close();
        
    })