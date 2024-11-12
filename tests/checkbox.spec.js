import { test, expect } from '@playwright/test';
test("test1", async ({ page }) => {
    await page.goto("https://www.amazon.in/")
  
    await page.locator("//a[normalize-space()='Electronics']").click();

    // await page.getByRole('link', { name: 'Electronics' }).click();
    
    expect(await page.locator("(//i[@class='a-icon a-icon-checkbox'])[8]").isChecked()).toBeFalsy();
    const options = await page.$$('ul>li label')
    
    
    for (let option of options) {
        const value = await option.textContent();
        console.log(value);
        if (await value.includes('OnePlus')) {
            await option.click();
            break;
        }
    }
    await page.pause();

     await page.locator("div[class='s-widget-container s-spacing-small s-widget-container-height-small celwidget slot=MAIN template=SEARCH_RESULTS widgetId=search-results_3'] span[class='a-size-base-plus a-color-base a-text-normal']").click();
    //  await page.pause();
    const newPage = await page.waitForEvent('popup');
    //  const newPage = await new Promise(resolve => page.once('popup', resolve));
    
    // await page.goto("https://www.amazon.in/OnePlus-Super-Silver-128GB-Storage/dp/B0D5YD7QSS/ref=sr_1_3?dib=eyJ2IjoiMSJ9.l4TLOasiVag3HcSLBjLH6LXxlQvyEVG2OESItNsld7MGUkHCUS5AoCoGOnKENLa1jz6YywHbb6ter6YTq1-2OKvGDEwVdm35DuPVJeeVZFpXbpuQp1r_HGnnz65bjhLlNHdkXA6ki9EuyND5WpWXXUc6684Y_JW4p8SmFtPsW0hOr6AQJ0Vm1gnAXkGTXZrnmRP6IcbWqfZ8Cx1yvqP4hKyo8GvJytaTOBMfPC5H5KyFThvc2UQgDMgGU6d2R_Gk-tM1I7s_TkkC04plJOLyA9_s8XIeKFrQidGn4pMoIIM._VokKPJX0AlsxIwU2Piz2dnLjn0t5cBrqOvTjHLld8I&dib_tag=se&qid=1721820494&refinements=p_89%3AOnePlus&rnid=3837712031&s=electronics&sr=1-3&th=1")
    //  await page.waitForTimeout(5000);
    //  await newPage.getByRole('button', { name: '8GB+256GB' }).click();
    //  await newPage.getByRole('button', { name: 'Ultra Orange' }).click();
    //  await newPage.waitForTimeout(3000)
     await newPage.getByLabel('Buy Now', { exact: true }).click();
     await page.pause();
    // await page.waitForTimeout(5000);


});