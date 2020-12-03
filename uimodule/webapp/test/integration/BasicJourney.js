sap.ui.define(
  [
    "sap/ui/test/opaQunit",
    "test462v1s/test462v1s/controller/BaseController"
  ],
  function(opaQunit, App, BaseController) {
    "use strict";
    QUnit.test("should add two numbers", function(assert) {
      assert.equal(4 + 4, 8, "1 + 1 = 2");
    });
  }
);
