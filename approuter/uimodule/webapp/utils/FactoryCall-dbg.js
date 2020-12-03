sap.ui.define(["../utils/callProviders/AjaxCaller",
"../utils/callProviders/OdataCaller"], function(AjaxCaller, OdataCaller) {
  "use strict";
  return {
    getProvider: (type) => {
      const oCall = {
        ajax: AjaxCaller,
        odata: OdataCaller
      };
      return oCall[type];
    }
  };
});
