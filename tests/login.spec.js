import { test, expect } from "@playwright/test";

test("SMRD-Login and Dashboard validation", async ({ page }) => {
  // 1. Visit the login page
  await page.goto("https://qasmrd.tatapower.com/login");

  // 2. Fill in usermobile number
  const phoneInput = page.locator("#phone");
  await phoneInput.fill("9999999999");

  // Locate the "Get OTP" button
  const getOtpButton = page.locator("span", { hasText: "Get OTP" });
  await getOtpButton.click();

  // Enter Otp
  const otpInput = page.locator('input.p-inputotp-input[maxlength="4"]');
  await otpInput.fill("4528");

  const verifyOtpButton = page.locator("span", { hasText: "Verify OTP" });
  await verifyOtpButton.click();

  // Validate the on the dashboard page
  await expect(page).toHaveURL(/.*dashboard/);

  // Or simply (Playwright auto-text selector)
  //const getOtpButton = page.getByText('Get OTP');

  // If you are sure about the class (optional, narrows down the search)
  //const getOtpButton = page.locator('span.ng-star-inserted', { hasText: 'Get OTP' });

  // Using XPath (if needed, but text selector is preferred)
  //const getOtpButton = page.locator('//span[text()="Get OTP"]');
});
