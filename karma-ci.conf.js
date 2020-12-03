module.exports = function(config) {
  "use strict";

  const webdriverConfig = {
    host: "localhost",
    port: 4444
  };

  config.set({
    port: 9876,
    hostname: "localhost",
    frameworks: ["ui5"],
    ui5: {
      type: "application",
      configPath: "uimodule/ui5.yaml",
      paths: {
        webapp: "uimodule/webapp"
      }
    },
    logLevel: "ALL",
    customLaunchers: {
      ChromeCustom: {
        base: "WebDriver",
        config: webdriverConfig,
        browserName: "chrome",
        platform: "ANY",
        version: "ANY"
      }
    },

    browsers: ["ChromeCustom"],
    preprocessors: {
      "uimodule/webapp/controller/**": ["coverage"]
    },
    coverageReporter: {
      type: "html",
      dir: "coverageLocal/"
    },
    singleRun: true
  });
};
