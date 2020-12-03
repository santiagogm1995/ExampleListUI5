sap.ui.define([
	"sap/ui/core/UIComponent",
	"sap/ui/Device",
	"test462v1s/test462v1s/model/models",
	"test462v1s/test462v1s/utils/Store"
], function (UIComponent, Device, models, store) {
	"use strict";

	return UIComponent.extend("test462v1s.test462v1s.Component", {

		metadata: {
			manifest: "json"
		},

		/**
		 * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
		 * @public
		 * @override
		 */
		init: function () {
			UIComponent.prototype.init.apply(this, arguments);

			this.getRouter().initialize();

			this.setModel(models.createDeviceModel(), "device");
			
			store.setOdata(this.getModel(store.getBack()));
		}
	});
});
