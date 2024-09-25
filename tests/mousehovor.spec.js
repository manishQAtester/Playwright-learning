import { test} from "@playwright/test";
test('mouse hover',async ({page})=>{
 
   await page.goto("https://webflow.com/made-in-webflow/mouse-hover");
   await page.locator('div').filter({ hasText: /^View detailsGlowing Cards on Hover2811\.2kDhruv Sachdev$/ }).getByRole('link').first().hover();
   await page.pause();
})