sap.ui.define(["sap/ui/test/Opa5"], function(Opa5) {
  "use strict";

  return Opa5.extend(
    "test462v1s.test462v1s.test.integration.arrangements.Startup",
    {
      iStartMyApp: function() {
        this.iStartMyUIComponent({
          componentConfig: {
            name: "test462v1s.test462v1s",
            async: true,
            manifest: true
          }
        });
      }
    }
  );
});
