import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';


// Test case for login functionality
test('Login to OrangeHRM', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.navigate();
  await loginPage.login();
 
  await expect(page.locator('.oxd-topbar-header-breadcrumb')).toBeVisible();
});