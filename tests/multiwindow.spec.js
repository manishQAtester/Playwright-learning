import { test } from "@playwright/test";
test("multi", async ({ page }) => {
    await page.goto("https://www.amazon.in/s?k=mobiles&crid=CJ0KY12GB2XH&sprefix=mobiles%2Caps%2C367&ref=nb_sb_noss_2");
    await page.getByRole('link', { name: 'Redmi Note 13 Pro (Arctic White, 8GB RAM, 128GB Storage) | 1.5K AMOLED | 200MP Hi-Res Camera | Flagship 4nm SD 7s Gen 2 | 67W TurboCharge', exact: true }).click();

    const newpage = await page.waitForEvent('popup');
    await newpage.locator('#buy-now-button').click();

    await page.bringToFront();
    await page.getByRole('link', { name: 'POCO X6 Neo 5G (Martian Orange, 12GB RAM and 256GB Storage)', exact: true }).click();

    const newpage2 = await page.waitForEvent('popup');
    await newpage2.locator('#desktop_qualifiedBuyBox').getByLabel('Add to Cart').click();

    await newpage.bringToFront();
    await newpage.getByLabel('Email or mobile phone number').fill("abc@gmail.com");

    await page.bringToFront();
    await page.getByPlaceholder('Search Amazon.in').fill("LG ac");
    await page.getByRole('button', { name: 'Go', exact: true }).click();
    await page.pause()
    await page.getByRole('link', { name: 'LG 1.5 Ton 3 Star DUAL Inverter Split AC (Copper, AI Convertible 6-in-1 Cooling, 2 Way Swing, HD Filter with Anti-Virus Protection, Faster Cooling & Energy Saving, 2024 Model, TS-Q18JNXE3, White)', exact: true }).click();
    
    const newpage3 = await page.waitForEvent('popup')
    await newpage3.getByLabel('Buy Now', { exact: true }).click()


    await page.pause();
})
