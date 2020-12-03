sap.ui.define([
		"sap/ui/model/json/JSONModel"
	],
	function (JSONModel) {
    "use strict";
		let oData = null;
		const sBack = "S4BACKEND";

		return {

			setOdata: function (_odata) {
				oData = _odata;
			},

			getOdata: function () {
				return oData;
			},

			getBack: function () {
				return sBack;
			}

		};
	});
