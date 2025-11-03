// src/support/pages/BasePage.ts

import { Page, expect } from '@playwright/test';

export default abstract class BasePage {
  constructor(readonly page: Page) {
    this.page = page;
  }

  async verifyTitle(title: string): Promise<void> {
    await expect(this.page).toHaveTitle(title);
  }

  async verifyUrl(url: string): Promise<void> {
    // CORREÇÃO: Converte a string 'url' em uma expressão regular.
    // Isso permite que o Playwright encontre o caminho relativo dentro do URL completo,
    // resolvendo o erro de comparação.
    const pathRegex = new RegExp(url);
    await expect(this.page).toHaveURL(pathRegex);
  }
}