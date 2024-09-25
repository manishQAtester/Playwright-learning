import { test, expect } from '@playwright/test';

test.beforeEach('orangehrm',async ({page})=>{
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.getByPlaceholder('Username').fill('Admin');
  await page.getByPlaceholder('Password').fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();
  
});

test("apply leave", async ({page})=>{
    let date = "2024-11-10";
    let date1 = "2024-11-15";
    await page.getByRole('button', { name: 'Apply Leave' }).click();
    await page.locator('.oxd-select-text-input').click();
    await page.getByText('CAN - FMLA').click();
    await page.locator('xpath=//*[@id="app"]/div[1]/div[2]/div[2]/div/div/form/div[2]/div/div[1]/div/div[2]/div/div/input').clear();
    await page.locator('xpath=//*[@id="app"]/div[1]/div[2]/div[2]/div/div/form/div[2]/div/div[1]/div/div[2]/div/div/input').fill(date);
    await page.locator('xpath=//*[@id="app"]/div[1]/div[2]/div[2]/div/div/form/div[2]/div/div[2]/div/div[2]/div/div/input').clear();
    await page.locator('xpath=//*[@id="app"]/div[1]/div[2]/div[2]/div/div/form/div[2]/div/div[2]/div/div[2]/div/div/input').fill(date1);
    await expect(page.locator('form')).toContainText('Comments');
    await page.pause();
//     await page.locator('form i').nth(2).click();

//   await page.locator('div').filter({ hasText: /^September$/ }).click();
//   await page.getByText('October').click();
//   await page.getByText('1', { exact: true }).click();
//   await page.locator('form i').nth(3).click();
//   await page.locator('div').filter({ hasText: /^October$/ }).click();
//   await page.getByRole('menu').getByText('October').click();
//   await page.getByText('10').click();
//   await page.locator('form i').nth(4).click();
//   await page.getByRole('option', { name: 'All Days' }).click();
//   await page.locator('div:nth-child(2) > .oxd-input-group > div:nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text--after > .oxd-icon').click();
//   await page.getByRole('option', { name: 'Half Day - Morning' }).click();
//   await page.locator('textarea').fill("going to delhi");
//   await page.getByRole('button', { name: 'Apply' }).click();
    

    await page.pause();
})




