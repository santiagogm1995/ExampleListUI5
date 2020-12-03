sap.ui.define([
  "sap/ui/test/Opa5",
  "test462v1s/test462v1s/test/integration/arrangements/Startup",
  "test462v1s/test462v1s/test/integration/BasicJourney"
], function(Opa5, Startup) {
  "use strict";

  Opa5.extendConfig({
    arrangements: new Startup(),
    pollingInterval: 1
  });

});
