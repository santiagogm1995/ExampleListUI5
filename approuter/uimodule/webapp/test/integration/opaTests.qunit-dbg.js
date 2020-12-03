/* global QUnit */

QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function() {
  "use strict";

  sap.ui.require([
    "test462v1s/test462v1s/test/integration/AllJourneys"
  ], function() {
    QUnit.start();
  });
});
