import { test, expect } from '@playwright/test';

test.use({ headless: false });

test('Переход на страницу отзывов', async ({ page }) => {
  // Сразу открываем страницу отзывов (она точно существует)
  await page.goto('https://www.kinopoisk.ru/film/5494049/reviews/', { waitUntil: 'domcontentloaded' });

  // Проверяем, что мы на странице отзывов (ищем заголовок или характерный текст)
  await expect(page.getByText(/Рецензии|Отзывы/i).first()).toBeVisible({ timeout: 10000 });
});