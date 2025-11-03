// src/support/elements/PimElements.ts - CORRIGIDO

import { Locator, Page } from '@playwright/test';
import BaseElements from './BaseElements';

export default class PimElements extends BaseElements {
  constructor(readonly page: Page) {
    super(page);
    this.page = page;
  }
  

  getPimMenuLink(): Locator {
    return this.page.locator('a[href="/web/index.php/pim/viewPimModule"]');
  }


  getEmployeeIdField(): Locator {
    return this.page.locator('.oxd-input-group').filter({ hasText: 'Employee Id' }).locator('input');
  }

  
  getSearchButton(): Locator {
    return this.page.locator('button:has-text("Search")');
  }
  
  
  getRecordFoundMessage(): Locator {
    
    return this.page.locator('span.oxd-text--span:has-text("Record Found")').first();
  }
}