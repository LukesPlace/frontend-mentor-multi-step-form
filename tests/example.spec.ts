import { test, expect } from '@playwright/test';

test.describe('Personal Info Form Validation', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:5173');
  });

  test('shows errors when fields are empty', async ({ page }) => {
    // Click the next/submit button
    await page.getByRole('button', { name: /next step/i }).click();

    // Expect validation errors
    await expect(page.getByText('This field is required')).toHaveCount(3);

    // Inputs should also be marked as invalid
    await expect(page.locator('#name')).toHaveAttribute('aria-invalid', 'true');
    await expect(page.locator('#emailAddress')).toHaveAttribute('aria-invalid', 'true');
    await expect(page.locator('#phoneNumber')).toHaveAttribute('aria-invalid', 'true');
  });

  test('accepts valid input and clears errors', async ({ page }) => {
    // Fill fields
    await page.fill('#name', 'Stephen King');
    await page.fill('#emailAddress', 'stephenking@lorem.com');
    await page.fill('#phoneNumber', '+1 234 567 890');

    // Click next
    await page.getByRole('button', { name: /next step/i }).click();

    // No validation messages should remain
    await expect(page.getByText('This field is required')).toHaveCount(0);

    await expect(page.getByTitle(/Select your plan/i)).toBeVisible();
  });
});
