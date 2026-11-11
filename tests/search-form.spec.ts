import { test, expect } from '@playwright/test';

test.use({ headless: false });

test('Работа с формой поиска', async ({ page }) => {
  await page.goto('https://www.kinopoisk.ru/film/5494049/', { waitUntil: 'domcontentloaded' });

  const searchInput = page.getByPlaceholder('Фильмы, сериалы, персоны').first();
  await expect(searchInput).toBeVisible({ timeout: 10000 });

  await searchInput.fill('Человек-паук');
  await searchInput.press('Enter');

  await page.waitForURL(/.*search.*/, { timeout: 15000 });
  await expect(page).toHaveURL(/.*search.*/);
});