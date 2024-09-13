// @ts-check
const { defineConfig, devices } = require('@playwright/test');


require('dotenv').config();

module.exports = defineConfig({
  testDir: './',
  retries:1,
  fullyParallel: false,
  workers:3,
  reporter: 'html',

  use: {
    trace: 'on',
    screenshot: 'on',
    video: "on"

  },


  projects: [
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'],
        viewport: { width: 1280, height: 720 }
      },
    }

  ]
});

