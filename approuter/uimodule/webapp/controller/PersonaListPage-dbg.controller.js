sap.ui.define([
	"sap/ui/model/json/JSONModel",
	"../controller/BaseController",
	"../controller/fragmentsController/PersonaDetailsPage",
	"../utils/FactoryCall"
], function (JSONModel, BaseController, PersonaDetailsPage, FactoryCall) {

	"use strict";
	
	return BaseController.extend("test462v1s.test462v1s.controller.PersonaListPage", {

		onInit: function () {
			this._PersonaDetailsPage = new PersonaDetailsPage(this.getView());

			const oRouter = sap.ui.core.UIComponent.getRouterFor(this.getView());
			oRouter.getRoute("PersonaListPage").attachMatched(this.onRouteMatchedDetail, this);
		},

		showWarning: function(){},
		CellClick: function(){},
		showError: function(){},
		Create: function () {
			this._PersonaDetailsPage.open(false);
		},
		Update: function () {
			this._PersonaDetailsPage.open(true);
		},
		showInfo: function(){},
		Cancel: function(){},
		Delete: async function (oEvent) {
	      let aIds = [];
	      this.getView().byId("PersonaList").setBusy(true);
	      this.getView().byId("PersonaList").getSelectedItems().forEach((a) => aIds.push(a.mAggregations.cells[0].getText()));
	      await Promise.all(aIds.map(async (element) => {
	          await FactoryCall.getProvider("ajax").delete("/api", "/Persona/", element);
	      }));
	
	      let oReturn = await FactoryCall.getProvider("ajax").getAll("/api", "/Personas");
          this.setModel(new JSONModel({ PersonaCollection: oReturn }), "PersonaList");
	
	      this.getView().byId("PersonaList").setBusy(false);
	      this.check();
		},

		onRouteMatchedDetail: async function (oEvent) {
			let oArgs = oEvent.getParameter("arguments");

			const oReturn = await FactoryCall.getProvider('ajax').getAll('/api','/Personas');
          	this.setModel(new JSONModel({ PersonaCollection: oReturn }), "PersonaList");
		},
		
		check: function() {
          const arrayLength = this.getView().byId("PersonaList").getSelectedContextPaths()
            .length;
          this.getView().byId("updateButton").setEnabled(arrayLength === 1);
          this.getView().byId("deleteButton").setEnabled(arrayLength >= 1);
        }
	});

});
