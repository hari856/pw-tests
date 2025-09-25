const { test, expect } = require("@playwright/test");
const path = require("path");

test("Drag and drop functionality", async ({ page }) => {
  await page.goto("http://127.0.0.1:5500/drag.htmll");
  await page.waitForTimeout(2000);

  const source = await page.locator("#source");
  const target = await page.locator("#target");

  await source.dragTo(target);
  await page.waitForTimeout(2000);

  await expect(target).toContainText("Dropped");
});
