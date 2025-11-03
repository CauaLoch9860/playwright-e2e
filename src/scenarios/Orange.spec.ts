import { test } from '@playwright/test';
import { join } from 'path';
import { TheConfig } from 'sicolo';
import OrangePage from '../support/pages/OrangePage'; 

test.describe('Testes de Login no OrangeHRM', () => {
  const CONFIG = join(__dirname, '../support/fixtures/config.yml');
  let orangePage: OrangePage;
  
  const BASE_URL = TheConfig.fromFile(CONFIG)
    .andPath('application.Orange') 
    .retrieveData();
  
  // Credenciais Válidas
  const usernameValido = 'Admin';
  const passwordValida = 'admin123';
  
  // Credenciais Inválidas e Mensagem de Erro Esperada
  const USERNAME_INVALIDO = 'usuario_inexistente';
  const PASSWORD_INVALIDA = 'senha_errada';
  const MENSAGEM_ESPERADA_ERRO = 'Invalid credentials'; 

  test.beforeEach(async ({ page }) => {
    orangePage = new OrangePage(page);
    await page.goto(BASE_URL);
  });

  test('Validar login com credenciais válidas', async () => {
    await orangePage.fazerLogin(usernameValido, passwordValida);
    await orangePage.validarLoginComSucesso();
  });
  

  test('Validar login com credenciais inválidas', async () => {

    await orangePage.fazerLogin(USERNAME_INVALIDO, PASSWORD_INVALIDA);
    

    await orangePage.validarLoginInvalido(MENSAGEM_ESPERADA_ERRO);
  });
});