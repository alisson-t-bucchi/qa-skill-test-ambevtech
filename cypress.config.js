import { defineConfig } from 'cypress';
import dotenv from 'dotenv';
import createBundler from '@bahmutov/cypress-esbuild-preprocessor';
import { addCucumberPreprocessorPlugin } from '@badeball/cypress-cucumber-preprocessor';
import { createEsbuildPlugin } from '@badeball/cypress-cucumber-preprocessor/esbuild';

dotenv.config();

export default defineConfig({
  e2e: {
    baseUrl: 'https://front.serverest.dev/login',
    specPattern: 'cypress/e2e/features/**/*.feature',
    supportFile: 'cypress/support/commands.js',

    setupNodeEvents: async (on, config) => {
      config.env = {
        ...config.env,
        USER: process.env.CYPRESS_USER,
        PASSWORD: process.env.CYPRESS_PASSWORD
      };

      await addCucumberPreprocessorPlugin(on, config);
      config.stepDefinitions = 'cypress/e2e/features/step_definitions/**/*.js';

      on(
        'file:preprocessor',
        createBundler({
          plugins: [createEsbuildPlugin(config)]
        })
      );

      return config;
    }
  }
});




