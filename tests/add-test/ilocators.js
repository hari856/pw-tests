const { chromium } = require("playwright");

(async () => {
  const browser = await chromium.launch({ headless: false });
  const page = await browser.newPage();

  await page.goto("http://127.0.0.1:5500/page1.html");

  //await page.fill('input[name="email"]', "abc@gmail.com");

  await page.locator('input[name="email"]').fill("abc@gmail.com");
  await page.waitForTimeout(3000);

  //await page.fill('input[name="password"]', "abc123#");
  await page.locator('input[name="password"]').fill("abc123#");
  await page.waitForTimeout(3000);

  await page.click("button#login");
  await page.waitForTimeout(3000);

  const message = await page.locator("#welcome").textContent();


  message.


  browser.close();
})();
