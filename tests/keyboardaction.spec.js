import { test} from "@playwright/test";



test('mouse hover',async ({page})=>{
 
    await page.goto("https://www.globalsqa.com/demo-site/draganddrop/#google_vignette");
    await page.getByPlaceholder('Search...').fill("testing");
    await page.getByPlaceholder('Search...').press("Control+A");
    await page.getByPlaceholder('Search...').press("Backspace");
    await page.keyboard.press('PageDown');
    
    await page.pause();
 })