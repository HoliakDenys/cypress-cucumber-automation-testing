import { defineConfig } from 'cypress';
import createBundler from '@bahmutov/cypress-esbuild-preprocessor';
import { addCucumberPreprocessorPlugin } from '@badeball/cypress-cucumber-preprocessor';
import { createEsbuildPlugin } from '@badeball/cypress-cucumber-preprocessor/esbuild';
import dotenv from 'dotenv';

dotenv.config();

export default defineConfig({
  e2e: {
    specPattern: 'cypress/e2e/**/*.feature',
    baseUrl: process.env.BASE_URL,
    reporter: '@shelex/cypress-allure-plugin',
    reporterOptions: {
      resultsDir: 'allure-results',
    },
    async setupNodeEvents(on, config) {
      await addCucumberPreprocessorPlugin(on, config);
      
      on(
        'file:preprocessor',
        createBundler({
          plugins: [createEsbuildPlugin(config)],
        })
      );
      
      require('@shelex/cypress-allure-plugin/writer')(on, config);
      
      return config;
    },
  },
});