import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';


// Test case for login functionality
test('Login to OrangeHRM', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.navigate();
  await loginPage.login();

  // Validate successful login (example: checking dashboard element)
  await expect(page.locator('.oxd-topbar-header-breadcrumb')).toBeVisible();
});