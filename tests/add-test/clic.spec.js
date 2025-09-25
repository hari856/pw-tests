const { test, expect } = require("@playwright/test");
const path = require("path");

test("Element Interaction Click and Hover", async ({ page }) => {
  await page.goto("http://127.0.0.1:5500/page2.html");

  await page.waitForTimeout(2000);

    // click by id

  await page.fill('#username', 'hari');

  await expect(page.locator("#username")).toHaveValue("hari");
  await page.waitForTimeout(2000);

  await page.fill("#username", "");

  await page.type("#username", "pqr");
  await page.waitForTimeout(2000);

  // click by text
  await page.click("text=Submit");
  await page.waitForTimeout(2000);

  // click by role
  await page.getByRole("button", { name: "Login" }).click();
  await page.waitForTimeout(2000);

  // hover
  await page.hover(".menu-item");
  await expect(page.locator(".tooltip")).toBeVisible();
  await page.waitForTimeout(2000);
});
