const { test, expect } = require('@playwright/test');

test('Successful checkout flow', async ({ page }) => {

  await page.goto('https://www.saucedemo.com/');

  await page.fill('#user-name', 'standard_user');
  await page.fill('#password', 'secret_sauce');

  await page.click('#login-button');

  await page.click('[data-test="add-to-cart-sauce-labs-backpack"]');

  await page.click('.shopping_cart_link');

  await page.click('[data-test="checkout"]');

  await page.fill('[data-test="firstName"]', 'Sophia');
  await page.fill('[data-test="lastName"]', 'Test');
  await page.fill('[data-test="postalCode"]', '2000');

  await page.click('[data-test="continue"]');

  await page.click('[data-test="finish"]');

  await expect(page.locator('.complete-header')).toHaveText('Thank you for your order!');
});