sap.ui.define([
	"sap/ui/model/json/JSONModel",
	"../controller/BaseController",
	"../controller/fragmentsController/LibroDetailsPage",
	"../utils/FactoryCall"
], function (JSONModel, BaseController, LibroDetailsPage, FactoryCall) {

	"use strict";
	
	return BaseController.extend("test462v1s.test462v1s.controller.LibroListPage", {

		onInit: function () {
			this._LibroDetailsPage = new LibroDetailsPage(this.getView());

			const oRouter = sap.ui.core.UIComponent.getRouterFor(this.getView());
			oRouter.getRoute("LibroListPage").attachMatched(this.onRouteMatchedDetail, this);
		},

		showWarning: function(){},
		CellClick: function(){},
		showError: function(){},
		Create: function () {
			this._LibroDetailsPage.open(false);
		},
		Update: function () {
			this._LibroDetailsPage.open(true);
		},
		showInfo: function(){},
		Cancel: function(){},
		Delete: async function (oEvent) {
	      let aIds = [];
	      this.getView().byId("LibroList").setBusy(true);
	      this.getView().byId("LibroList").getSelectedItems().forEach((a) => aIds.push(a.mAggregations.cells[0].getText()));
	      await Promise.all(aIds.map(async (element) => {
	          await FactoryCall.getProvider("ajax").delete("/api", "/Libro/", element);
	      }));
	
	      let oReturn = await FactoryCall.getProvider("ajax").getAll("/api", "/Libros");
          this.setModel(new JSONModel({ LibroCollection: oReturn }), "LibroList");
	
	      this.getView().byId("LibroList").setBusy(false);
	      this.check();
		},

		onRouteMatchedDetail: async function (oEvent) {
			let oArgs = oEvent.getParameter("arguments");

			const oReturn = await FactoryCall.getProvider('ajax').getAll('/api','/Libros');
          	this.setModel(new JSONModel({ LibroCollection: oReturn }), "LibroList");
		},
		
		check: function() {
          const arrayLength = this.getView().byId("LibroList").getSelectedContextPaths()
            .length;
          this.getView().byId("updateButton").setEnabled(arrayLength === 1);
          this.getView().byId("deleteButton").setEnabled(arrayLength >= 1);
        }
	});

});
