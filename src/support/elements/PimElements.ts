// src/support/elements/PimElements.ts - CORRIGIDO

import { Locator, Page } from '@playwright/test';
import BaseElements from './BaseElements';

export default class PimElements extends BaseElements {
  constructor(readonly page: Page) {
    super(page);
    this.page = page;
  }
  
  // Elemento do menu lateral "PIM"
  getPimMenuLink(): Locator {
    return this.page.locator('a[href="/web/index.php/pim/viewPimModule"]');
  }

  // Campo de texto "Employee Id" (CORREÇÃO DA ETAPA ANTERIOR)
  getEmployeeIdField(): Locator {
    return this.page.locator('.oxd-input-group').filter({ hasText: 'Employee Id' }).locator('input');
  }

  // Botão "Search"
  getSearchButton(): Locator {
    return this.page.locator('button:has-text("Search")');
  }
  
  // Mensagem "(1) Record Found" - NOVA CORREÇÃO AQUI
  getRecordFoundMessage(): Locator {
    // Localiza a tag <span> que possui a classe correta E que contém o texto "Record Found".
    // Isso garante que não selecionamos o "Admin" ou qualquer outro span genérico.
    return this.page.locator('span.oxd-text--span:has-text("Record Found")').first();
  }
}