const { test, expect } = require("@playwright/test");

test("Interact iframe", async ({ page }) => {
  await page.goto("http://127.0.0.1:5500/iframe.html");
  await page.waitForTimeout(1000); // Wait for the iframe to load

  const frame = await page.frame({ name: "testFrame" });
  await expect(frame.locator("text = Inside the iFrame")).toBeVisible();
  await page.waitForTimeout(1000);

  await frame.click("#clickMe");
  await page.waitForTimeout(1000);

  const message = frame.locator("#message");
  await expect(message).toHaveText("You clicked the button");
  await page.waitForTimeout(1000);
});
