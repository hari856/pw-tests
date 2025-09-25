const { test, expect } = require("@playwright/test");

test("login test", async ({ page }) => {
  await page.goto("/login.html");
  await page.fill("#username", "admin");
  await page.fill("#password", "1234");

  await page.click("text=Login");
  await page.waitForTimeout(2000);

  //   await page.evaluate(() => {
  //     login();
  //   });

  await expect(page.locator("#message")).toHaveText("Login successful");
});
