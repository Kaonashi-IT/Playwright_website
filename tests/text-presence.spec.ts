import { test, expect } from '@playwright/test';

test.use({ headless: false });

test('Проверка текстов на странице фильма', async ({ page }) => {
  await page.goto('https://www.kinopoisk.ru/film/5494049/', { waitUntil: 'domcontentloaded' });

  await expect(page.getByText(/Человек-паук: Новый день/i).first()).toBeVisible();
  await expect(
    page.getByText(/Питер Паркер возвращается после заклинания Доктора Стренджа/i).first()
  ).toBeVisible();
  await expect(page.getByText(/2026/i).first()).toBeVisible();
});