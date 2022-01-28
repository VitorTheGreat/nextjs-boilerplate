const path = require('path');

module.exports = {
  "stories": [
    "../src/components/**/stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    '@storybook/preset-scss',
    '@storybook/addon-knobs'
  ],
  //Config to correct absolute import from TS :)
  webpackFinal: async (config, { configType }) => {
    config.resolve.modules = [
      path.resolve(__dirname, "../src"),
      "node_modules",
    ]

    return config;
  }
}