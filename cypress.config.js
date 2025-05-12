const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://example.cypress.io', // Укажи URL твоего приложения
    setupNodeEvents(on, config) {
      // Добавь необходимые события
    },
  },
});
