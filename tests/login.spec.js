const {test, expect} = require('@playwright/test');

test("Sauce lab login", async ({page})=>{
    await page.goto("https://www.saucedemo.com/");
    await page.getByRole("textbox", {name: "Username"}).fill("standard_user");
    await page.getByRole("textbox", {name: "password"}).fill("secret_sauce");
    await page.getByRole("button", {name: "Login"}).click();
    await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html");
} );

