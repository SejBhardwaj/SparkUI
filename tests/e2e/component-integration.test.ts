import { test, expect } from '@playwright/test';

test.describe('Component Integration', () => {
  test('should render all components', async ({ page }) => {
    await page.goto('/');
    
    // Test Button
    const button = page.locator('button');
    await expect(button).toBeVisible();
    
    // Test Input
    const input = page.locator('input');
    await expect(input).toBeVisible();
    
    // Test Card
    const card = page.locator('.card');
    await expect(card).toBeVisible();
  });
  
  test('should handle interactions', async ({ page }) => {
    await page.goto('/');
    
    const button = page.locator('button');
    await button.click();
    
    const modal = page.locator('.modal');
    await expect(modal).toBeVisible();
  });
});
