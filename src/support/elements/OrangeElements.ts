import { Locator, Page } from '@playwright/test';
import BaseElements from './BaseElements';

export default class OrangeElements extends BaseElements {
  constructor(readonly page: Page) {
    super(page);
    this.page = page;
  }

  // Localizador para o campo Username
  getUsernameField(): Locator {
    // O campo de Username geralmente tem o atributo 'name="username"'
    return this.page.locator('input[name="username"]');
  }

  // Localizador para o campo Password
  getPasswordField(): Locator {
    // O campo de Password geralmente tem o atributo 'name="password"'
    return this.page.locator('input[name="password"]');
  }

  // Localizador para o botão Login
  getLoginButton(): Locator {
    // O botão de Login geralmente é do tipo 'submit'
    return this.page.locator('button[type="submit"]');
  }

  // Localizador para um elemento de validação no Dashboard após o login
  getDashboardHeader(): Locator {
    // Em um login bem-sucedido, o texto "Dashboard" no menu lateral é uma boa validação.
    // O Playwright é inteligente o suficiente para encontrar o texto.
    return this.page.locator('text=Dashboard').first();
  }

  // Localizador para a mensagem de erro (caso o teste falhe)
  getErrorMessage(): Locator {
    return this.page.locator('.oxd-alert-content-text');
  }
}