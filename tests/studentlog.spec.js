import { test, expect } from "@playwright/test";
//login page
    test.describe("Student login", () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('http://localhost/c/login.html');
        await page.pause();
    }); 
    test("Check all components are visible", async ({ page }) => {
        
        await expect(page.getByRole("heading", {name: "Login",})).toBeVisible();
        await expect(page.getByLabel("Username:")).toBeVisible();
        await expect(page.getByLabel("Password:")).toBeVisible();
        await expect(page.getByRole("button", { name: "Login" })).toBeVisible();
        await expect(page.getByRole("link", { name: "Register here" })).toBeVisible();
      });
      test("Login as Student view results and logout", async ({ page }) => {
        await page.getByLabel('Username:').click();
        await page.getByLabel('Username:').fill('Bashara');
        await page.getByLabel('Password:').click();
        await page.getByLabel('Password:').fill('123');
        await page.getByRole('button', { name: 'Login' }).click();
        await page.getByRole('button', { name: ' View Results' }).click();
        await page.getByRole('link', { name: 'Logout' }).click();
     

   
    });});