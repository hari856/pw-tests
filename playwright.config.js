const { defineConfig, devices } = require("@playwright/test");

module.exports = defineConfig({
  testDir: "./tests", // test folder
  workers: 3,
  timeout: 30000, // max test time
  retries: 1, // retry failed tests
  reporter: [[ 'html', {open: 'html '}]],

  use: {
    baseURL: "http://localhost:5500",
    headless: true,
  }, // base URL for tests

  projects: [
    {
      name: "chromium",
      use: {
        browserName: "chromium",
      },
    },
  ],
});
