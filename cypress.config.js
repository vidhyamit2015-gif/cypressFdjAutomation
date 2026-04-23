const { defineConfig } = require("cypress");

module.exports = defineConfig({
  allowCypressEnv: false,
 retries: {
  openMode: 1,   // minimal retry while debugging
  runMode: 2     // more retry in CI for stability
},
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'cypress/reports/raw',
    overwrite: true,
    html: true,
    json: false
  },

  e2e: {
    testIsolation: true,
    baseUrl: 'https://thinking-tester-contact-list.herokuapp.com',
    specPattern: 'cypress/e2e/**/*.cy.js',
    supportFile: 'cypress/support/e2e.js',
    setupNodeEvents(on, config) {
      return config;
    }
  },

    env: {
        viewportProfile: 'desktop',
        viewportWidth: 1280,
        viewportHeight: 800,
        apiBaseUrl: 'https://pokeapi.co/api/v2'
  },

  defaultCommandTimeout: 10000,
  pageLoadTimeout: 30000,
  screenshotOnRunFailure: true,
  video: false
});
