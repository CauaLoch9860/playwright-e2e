import { Page, expect } from '@playwright/test';
import OrangeElements from '../elements/OrangeElements'; 
import BasePage from './BasePage';

export default class OrangePage extends BasePage {
  readonly orangeElements: OrangeElements;

  constructor(readonly page: Page) {
    super(page);
    this.page = page;
    this.orangeElements = new OrangeElements(page);
  }

  async fazerLogin(username: string, password: string): Promise<void> {
    await this.orangeElements.getUsernameField().fill(username);
    await this.orangeElements.getPasswordField().fill(password);
    await this.orangeElements.getLoginButton().click();
  }

  async validarLoginComSucesso(): Promise<void> {
    await this.verifyUrl('/web/index.php/dashboard/index'); 
    await expect(this.orangeElements.getDashboardHeader()).toBeVisible();
  }

  
  async validarLoginInvalido(expectedMessage: string): Promise<void> {

    await expect(this.orangeElements.getErrorMessage()).toBeVisible();
    

    await expect(this.orangeElements.getErrorMessage()).toHaveText(expectedMessage);
  }
}