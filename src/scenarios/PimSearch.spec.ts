// src/scenarios/PimSearch.spec.ts
import { test } from '@playwright/test';
import { join } from 'path';
import { TheConfig } from 'sicolo';
import OrangePage from '../support/pages/OrangePage'; // Para o login
import PimPage from '../support/pages/PimPage'; // Para a busca

test.describe('Testes PIM: Busca de Funcionário com ZeroStep AI', () => {
  const CONFIG = join(__dirname, '../support/fixtures/config.yml');
  let orangePage: OrangePage;
  let pimPage: PimPage;
  
  const BASE_URL = TheConfig.fromFile(CONFIG)
    .andPath('application.Orange') 
    .retrieveData();

  const USERNAME_VALIDO = 'Admin';
  const PASSWORD_VALIDA = 'admin123';
  

  const ID_FUNCIONARIO = '0295'; 

  test.beforeEach(async ({ page }) => {
    orangePage = new OrangePage(page);
    pimPage = new PimPage(page);
    

    await page.goto(BASE_URL);
    await orangePage.fazerLogin(USERNAME_VALIDO, PASSWORD_VALIDA);

    await pimPage.navegarParaPim();
  });


  test('Buscar funcionário pelo ID e validar o resultado (Usando ZeroStep AI)', async () => {

    await pimPage.buscarFuncionarioComAI(ID_FUNCIONARIO);
    

    await pimPage.validarBuscaComSucesso(ID_FUNCIONARIO);
  });
});