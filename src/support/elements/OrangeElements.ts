import { Locator, Page } from '@playwright/test';
import BaseElements from './BaseElements';

export default class OrangeElements extends BaseElements {
  constructor(readonly page: Page) {
    super(page);
    this.page = page;
  }

  
  getUsernameField(): Locator {
    
    return this.page.locator('input[name="username"]');
  }

  
  getPasswordField(): Locator {
    
    return this.page.locator('input[name="password"]');
  }

  
  getLoginButton(): Locator {
    
    return this.page.locator('button[type="submit"]');
  }

  
  getDashboardHeader(): Locator {
    
    
    return this.page.locator('text=Dashboard').first();
  }

  
  getErrorMessage(): Locator {
    return this.page.locator('.oxd-alert-content-text');
  }
}