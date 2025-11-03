// src/support/pages/PimPage.ts
import { Page, expect } from '@playwright/test';
// Se o ZeroStep fosse importado: import { step } from '@zerostep/playwright'; 
import PimElements from '../elements/PimElements';
import BasePage from './BasePage';

export default class PimPage extends BasePage {
  readonly pimElements: PimElements;

  constructor(readonly page: Page) {
    super(page);
    this.page = page;
    this.pimElements = new PimElements(page);
  }

  async navegarParaPim(): Promise<void> {
    await this.page.locator('text=PIM').click();
    await this.verifyUrl('/web/index.php/pim/viewEmployeeList');
  }
  
  // Método que usará o ZeroStep AI
  async buscarFuncionarioComAI(employeeId: string): Promise<void> {
    // --- PONTO DE INTEGRAÇÃO ZEROSTEP AI ---
    // (AÇÃO VIA PLAYWRIGHT TRADICIONAL PARA COMPATIBILIDADE)
    // Se estivéssemos usando ZS, a linha seria:
    // await step(`Find the employee with ID ${employeeId} and click the Search button`, { page: this.page });
    // Por enquanto, usamos a ação via locators:
    
    await this.pimElements.getEmployeeIdField().fill(employeeId);
    await this.pimElements.getSearchButton().click();
  }

  async validarBuscaComSucesso(employeeId: string): Promise<void> {
    // 1. Valida a mensagem de sucesso
    await expect(this.pimElements.getRecordFoundMessage()).toContainText('(1) Record Found');
    
    // 2. Valida se o ID correto está visível na tabela de resultados
    await expect(this.page.locator(`text=${employeeId}`)).toBeVisible();
  }
}