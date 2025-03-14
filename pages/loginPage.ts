import { Page } from '@playwright/test';
import { JsonUtil } from '../utilities/readjsonUtil';

export class LoginPage {
  private page: Page;
  private usernameInput = 'input[name="username"]';
  private passwordInput = 'input[name="password"]';
  private loginButton = 'button[type="submit"]';

  constructor(page: Page) {
    this.page = page;
  }

  async navigate() {
    await this.page.goto(JsonUtil.getUrl());
  }

  async login() {
    const credentials = JsonUtil.getCredentials();
    await this.page.fill(this.usernameInput, credentials.username);
    await this.page.fill(this.passwordInput, credentials.password);
    await this.page.click(this.loginButton);
  }
}