//generate browser context
const { chromium } = require("playwright");

(async () => {
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext();
  const page = await context.newPage();
  console.log("Browser opened");
  await page.goto("https://www.google.com");
  await browser.close();
  console.log("Browser closed");
})();
