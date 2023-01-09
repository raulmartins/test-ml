import { test, expect } from '@playwright/test';

test('should navigate to the list item page', async ({ page }) => {
  await page.goto('/items');

  // Enter a search query and submit the form
  await page.fill('input[type="search"]', 'time ceara');
  await page.click('button[type="submit"]');
  // Wait for the search results to be displayed
  await page.waitForSelector('div[id="list-result"]');
  // Verify that the search results are displayed
  const searchResults = await page.$('div[id="card"]');
  expect(searchResults).toBeTruthy();
});
