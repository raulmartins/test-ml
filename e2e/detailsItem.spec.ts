import { test, expect } from '@playwright/test';

test('should navigate to the item details page', async ({ page }) => {
  await page.goto('/items/MLA817649326');

  await page.click('button[type="button"]');
});
