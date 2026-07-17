const {test, expect} = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');

test("Sauce lab login", async ({page})=>{
    await page.goto("https://www.saucedemo.com/");
    const loginpageObj = new LoginPage(page);
    await loginpageObj.loginResubale("standard_user", "secret_sauce");
    await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html");
} );

test("using page object", async({page})=> {
    await page.goto("https://www.saucedemo.com/");
    const loginpageobj1 = new LoginPage(page);
    await loginpageobj1.EnterUsername("standard_user");
    await loginpageobj1.EnterPassword("secret_sauce");
    await loginpageobj1.LoginButton.click();
    await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html");
})