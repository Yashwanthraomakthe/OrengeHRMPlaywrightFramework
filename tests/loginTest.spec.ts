import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';
import { visualCompare } from '../utilities/visualCompare';



// Test case for login functionality
test('Login to OrangeHRM1', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const compare = new visualCompare(page);
  await loginPage.navigate();
  await loginPage.login();
 
  await expect(page.locator('.oxd-topbar-header-breadcrumb')).toBeVisible();
  // Visual comparison
  await compare.visualCompareBasic("LoginPage.png")
});

// Test case for login functionality
test('Login to OrangeHRM2', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const compare = new visualCompare(page);
  await loginPage.navigate();
  await loginPage.login();
 
  await expect(page.locator('.oxd-topbar-header-breadcrumb')).toBeVisible();
  // Visual comparison
  await compare.visualCompareBasic("LoginPage.png")
});

// Test case for login functionality
test('Login to OrangeHRM3', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const compare = new visualCompare(page);
  await loginPage.navigate();
  await loginPage.login();
 
  await expect(page.locator('.oxd-topbar-header-breadcrumb')).toBeVisible();
  // Visual comparison
  await compare.visualCompareBasic("LoginPage.png")
});

// Test case for login functionality
test('Login to OrangeHRM4', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const compare = new visualCompare(page);
  await loginPage.navigate();
  await loginPage.login();
 
  await expect(page.locator('.oxd-topbar-header-breadcrumb')).toBeVisible();
  // Visual comparison
  await compare.visualCompareBasic("LoginPage.png")
});