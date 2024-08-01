import { test, expect } from "@playwright/test";
//login page
    test.describe("Admin login page", () => {
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
      test("should redirect to admin register page on click", async ({ page }) => {
        await page.getByRole("link", { name: "Register here" }).click();
    
        await expect(page).toHaveTitle("Register - Exam Result Management System");
      });
      
      //Register page

      test.describe("Register Page", () => {
        test.beforeEach(async ({ page }) => {
          await page.goto("http://localhost/c/register.html");
        });
        test("RCheck all components are visible", async ({ page }) => {
            await expect(page).toHaveTitle("Register - Exam Result Management System");
            await expect(page.getByRole("heading", {name: "Register", }) ).toBeVisible();
           await expect(page.getByLabel("Full Name:")).toBeVisible();
           await expect(page.getByLabel("Username:")).toBeVisible();
           await expect(page.getByLabel("Password:")).toBeVisible();
         await expect(page.getByRole('button', { name: 'Register' })).toBeVisible();
         await expect(page.getByRole("link", { name: "Login here" })).toBeVisible();
        });

        // registration and login both pages
       test("Registration,login,adding a student,adding results process of Lecturer", async ({ page }) => {
        await page.getByLabel("Full Name:").fill('Brayan Alex');
        await page.getByLabel("Username:").fill('Brayan');
        await page.getByLabel("Password:").fill('123');
       await page.getByRole("button", { name: "Register" }).click();
      
        await page.getByLabel('Username:').click();
        await page.getByLabel('Username:').fill('Brayan');
        await page.getByLabel('Password:').click();
        await page.getByLabel('Password:').fill('123');
        await page.getByRole('button', { name: 'Login' }).click();
        await page.getByRole('link', { name: ' Student List' }).click();
        await page.getByRole('button', { name: 'Add Student' }).click();
        await page.getByRole('textbox', { name: 'Username:' }).click();
        await page.getByRole('textbox', { name: 'Username:' }).fill('Bashara');
        await page.getByLabel('Password:').click();
        await page.getByLabel('Password:').fill('123');
        await page.locator('#enroll_year').selectOption('2');
        await page.locator('#current_semester').selectOption('2');
        await page.getByRole('textbox', { name: 'Student Name:' }).click();
        await page.getByRole('textbox', { name: 'Student Name:' }).fill('Bashara Chamindu');
       
        await page.locator('#addStudentModal').getByRole('button', { name: 'Add Student' }).click();
        await page.getByRole('link', { name: 'Exam Results' }).click();
        await page.getByRole('button', { name: 'View Modules' }).click();
        await page.getByRole('button', { name: 'Add/Update Grade' }).first().click();
    
        await page.getByRole('button', { name: 'Submit' }).click();
        await page.getByRole('button', { name: 'View Modules' }).click();
        await page.getByRole('button', { name: 'Add/Update Mid Marks' }).first().click();
        await page.getByLabel('Mid Marks (0-20):').click();
        await page.getByLabel('Mid Marks (0-20):').fill('19');
      
        await page.getByRole('button', { name: 'Submit' }).click();
        await page.getByRole('button', { name: 'View Modules' }).click();
        await page.getByRole('button', { name: 'Add/Update Grade' }).nth(1).click();
        await page.getByLabel('Grade:').selectOption('A');
       
        await page.getByRole('button', { name: 'Submit' }).click();
        await page.getByRole('button', { name: 'View Modules' }).click();
        await page.getByRole('button', { name: 'Add/Update Mid Marks' }).nth(1).click();
        await page.getByLabel('Mid Marks (0-20):').click();
        await page.getByLabel('Mid Marks (0-20):').fill('18');
      
        await page.getByRole('button', { name: 'Submit' }).click();
        await page.getByRole('button', { name: 'View Modules' }).click();
        await page.getByRole('button', { name: 'Add/Update Grade' }).nth(2).click();
        await page.getByLabel('Grade:').selectOption('A-');
       
        await page.getByRole('button', { name: 'Submit' }).click();
        await page.getByRole('button', { name: 'View Modules' }).click();
        await page.getByRole('button', { name: 'Add/Update Mid Marks' }).nth(2).click();
        await page.getByLabel('Mid Marks (0-20):').click();
        await page.getByLabel('Mid Marks (0-20):').fill('17');
      
        await page.getByRole('button', { name: 'Submit' }).click();
        await page.getByRole('button', { name: 'View Modules' }).click();
        await page.getByRole('button', { name: 'Add/Update Grade' }).nth(3).click();
        await page.getByLabel('Grade:').selectOption('B');
      
        await page.getByRole('button', { name: 'Submit' }).click();
        await page.getByRole('cell', { name: 'View Modules' }).click();
        await page.getByRole('button', { name: 'Add/Update Mid Marks' }).nth(3).click();
        await page.getByLabel('Mid Marks (0-20):').click();
        await page.getByLabel('Mid Marks (0-20):').fill('15');
        await page.getByText('× Add/Update Mid Marks Mid').click();
        
        await page.getByRole('button', { name: 'Submit' }).click();
        await page.getByRole('link', { name: 'Logout' }).click();
    
    });
        
      });
}); 