import baseConfig from './cypress.config';

export default {
  ...baseConfig,
  e2e: {
    ...baseConfig.e2e,
    browser: 'edge',
    viewportWidth: 1280,
    viewportHeight: 720,
    video: true,
    screenshotOnRunFailure: true,
  },
};