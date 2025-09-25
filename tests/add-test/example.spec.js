//Playwright Test

import { test, expect } from "@playwright/test";

test("should load google.com", async ({ page }) => {
  await page.goto("https://www.google.com/");

  await expect(page).toHaveTitle(/Google/);
});

// npx playwright test
// built in test runner
// managed by test runner
// built in retry logic
// UI testing
