import { test, expect } from '@playwright/test';

test('should navigate to the home page', async ({ page }) => {
  // Start from the index page (the baseURL is set via the webServer in the playwright.config.ts)
  await page.goto('/');

  // Enter a search query and submit the form
  await page.fill('input[type="search"]', 'product');
  await page.click('button[type="submit"]');

  // Wait for the search results to be displayed
  await page.waitForSelector('div[id="list-result"]');

  // Verify that the search results are displayed
  const searchResults = await page.$('div[id="card"]');
  expect(searchResults).toBeTruthy();
});
