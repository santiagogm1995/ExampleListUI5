sap.ui.define([
	"sap/ui/model/json/JSONModel",
	"../controller/BaseController",
	"../controller/fragmentsController/CocheDetailsPage",
	"../utils/FactoryCall"
], function (JSONModel, BaseController, CocheDetailsPage, FactoryCall) {

	"use strict";
	
	return BaseController.extend("test462v1s.test462v1s.controller.CocheListPage", {

		onInit: function () {
			this._CocheDetailsPage = new CocheDetailsPage(this.getView());

			const oRouter = sap.ui.core.UIComponent.getRouterFor(this.getView());
			oRouter.getRoute("CocheListPage").attachMatched(this.onRouteMatchedDetail, this);
		},

		showWarning: function(){},
		CellClick: function(){},
		showError: function(){},
		Create: function () {
			this._CocheDetailsPage.open(false);
		},
		Update: function () {
			this._CocheDetailsPage.open(true);
		},
		showInfo: function(){},
		Cancel: function(){},
		Delete: async function (oEvent) {
	      let aIds = [];
	      this.getView().byId("CocheList").setBusy(true);
	      this.getView().byId("CocheList").getSelectedItems().forEach((a) => aIds.push(a.mAggregations.cells[0].getText()));
	      await Promise.all(aIds.map(async (element) => {
	          await FactoryCall.getProvider("ajax").delete("/api", "/Coche/", element);
	      }));
	
	      let oReturn = await FactoryCall.getProvider("ajax").getAll("/api", "/Coches");
          this.setModel(new JSONModel({ CocheCollection: oReturn }), "CocheList");
	
	      this.getView().byId("CocheList").setBusy(false);
	      this.check();
		},

		onRouteMatchedDetail: async function (oEvent) {
			let oArgs = oEvent.getParameter("arguments");

			const oReturn = await FactoryCall.getProvider('ajax').getAll('/api','/Coches');
          	this.setModel(new JSONModel({ CocheCollection: oReturn }), "CocheList");
		},
		
		check: function() {
          const arrayLength = this.getView().byId("CocheList").getSelectedContextPaths()
            .length;
          this.getView().byId("updateButton").setEnabled(arrayLength === 1);
          this.getView().byId("deleteButton").setEnabled(arrayLength >= 1);
        }
	});

});
