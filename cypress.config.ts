import createBundler from '@bahmutov/cypress-esbuild-preprocessor';
import { defineConfig } from 'cypress';
import { addCucumberPreprocessorPlugin } from '@badeball/cypress-cucumber-preprocessor';
import { createEsbuildPlugin } from '@badeball/cypress-cucumber-preprocessor/esbuild';

export default defineConfig({
  video: true,
  defaultCommandTimeout: 20000,
  // watchForFileChanges: false,
  viewportWidth: 1920,
  viewportHeight: 1080,
  responseTimeout: 60000,
  retries: {
    runMode: 1,
  },
  e2e: {
    baseUrl: "https://google.com",
    specPattern: "**/*.feature",

    async setupNodeEvents(on, config) {
    const bundler = createBundler({
      define: {global: 'window'},
      plugins: [createEsbuildPlugin(config)],
    });

    on('file:preprocessor', bundler);
    await addCucumberPreprocessorPlugin(on, config);
    return config;
    },
    env: {
      stepDefinitions: [
        '**/[filepart].spec.ts',
      ],
    },
  },
});