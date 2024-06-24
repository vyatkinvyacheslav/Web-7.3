const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://petstore.swagger.io/v2/",
    projectId: "obo43h",
    
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
