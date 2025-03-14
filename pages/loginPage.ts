import { Page } from '@playwright/test';
import * as fs from 'fs';

export class LoginPage {
  private page: Page;
  private usernameInput = 'input[name="username"]';
  private passwordInput = 'input[name="password"]';
  private loginButton = 'button[type="submit"]';

  constructor(page: Page) {
    this.page = page;
  }

  async navigate() {
    await this.page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
  }

  async login() {

    const loginData = JSON.parse(fs.readFileSync('testdata/logindata.json', 'utf-8'));
    const { username, password } = loginData;   
   
    await this.page.fill(this.usernameInput, username);
    await this.page.fill(this.passwordInput, password);
    await this.page.click(this.loginButton);
  }
}