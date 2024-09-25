import { test} from "@playwright/test";




//approach 1
// test('drag and drop',async ({page})=>{
 
//    await page.goto("https://www.globalsqa.com/demo-site/draganddrop/#google_vignette");
//    await page.frameLocator('#post-2669 iframe').nth(2).getByRole('img', { name: 'The chalet at the Green' }).hover();
//    await page.mouse.down();
//    await page.frameLocator('#post-2669 iframe').nth(2).locator('#trash').hover();
//    await page.mouse.up();
//    await page.pause();
// })



//approach 2
// test('drag and drop',async ({page})=>{
 
//     await page.goto("https://www.globalsqa.com/demo-site/draganddrop/#google_vignette");
//     await page.frameLocator('#post-2669 iframe').nth(2).getByRole('img', { name: 'The chalet at the Green' }).dragTo(page.frameLocator('#post-2669 iframe').nth(2).locator('#trash'));
//     await page.pause();
//  })

// for perticular location drop
 test('drag and drop',async ({page})=>{
 
    await page.goto("https://www.globalsqa.com/demo-site/draganddrop/#Propagation");
    await page.frameLocator('#post-2669 iframe').nth(4).locator('#draggable').dragTo(page.frameLocator('#post-2669 iframe').nth(4).locator('#droppable2-inner')),{
        sourcePosition:{x:0,y:0},
        targetPosition:{x:10,y:10}

    }
    await page.pause();
 })