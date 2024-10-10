// @ts-check
const { defineConfig, devices } = require('@playwright/test');


require('dotenv').config();

module.exports = defineConfig({
  testDir: './tests/MyCource',
  timeout: 30*10000,
  expect:{
    timeout:5000
  },
 // retries:1,
  fullyParallel: false,
  workers:3,
  reporter: 'html',

  use: {
    trace: 'retain-on-failure',
    screenshot:'only-on-failure',
    video: 'retain-on-failure'
  },


  projects: [
    // {
    //   name: 'webkit',
    //   use: {
    //     ...devices['Desktop Safari'],
    //    // viewport: { width: 1280, height: 720 },
    //     headless: false
    //   },
    // },
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'],
       // viewport: { width: 1280, height: 720 },
        headless: false
      },
    }
  ]
});

