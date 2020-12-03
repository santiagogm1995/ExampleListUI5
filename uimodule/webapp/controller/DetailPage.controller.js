sap.ui.define([
  "sap/ui/core/mvc/Controller",
  "../utils/Utils",
  "../controller/BaseController",
  "../utils/FactoryCall"
], function (Controller, Utils, BaseController, FactoryCall) {
  "use strict";

  return BaseController.extend("test462v1s.test462v1s.controller.DetailPage", {

    onInit: function () {
      let oRouter = this.getRouter();
      oRouter.getRoute("DetailPage").attachMatched(this.onRouteMatchedDetail, this);
    },

    onRouteMatchedDetail: function (oEvent) {
      let oArgs = oEvent.getParameter("arguments");
      
      Utils.setParameterBindings(this);
      
	const oSession = [
	function (that){
	},
	function (that){
 },
  function (that){
				that.CallApi();
}
];
	
	  oSession.forEach((a) => a(this));
	},
	
	/**
	*Funcion --> showWarning
	*@method
	*
	*@param message 
	*@param code 
	*/
		showWarning: function(){
		},
	/**
	*Funcion --> showError
	*@method
	*
	*@param message 
	*@param code 
	*/
		showError: function(){
		},
	/**
	*Funcion --> showInfo
	*@method
	*
	*@param message 
	*@param code 
	*/
		showInfo: function(){
		},
	/**
	*Funcion --> CallApi
	*@method
	*
	*/
		CallApi: function(){
		
			(function (that) {
          var settings = {
            url:
              "https://rickandmortyapi.com/api/character/" +
              that.getView().byId("IdPersona").getValue(),
            method: "GET",
            timeout: 0,
          };
          $.ajax(settings).done(function (response) {
            that.getView().byId("Nombre").setValue(response.name);
            that.getView().byId("Status").setValue(response.status);
            that.getView().byId("Specie").setValue(response.species);
            that.getView().byId("Gender").setValue(response.gender);
          });
        })(this);
			
			
			
		},
	/**
	*Funcion --> GoBack
	*@method
	*
	*/
		GoBack: function(){
		
			
			
			
			
		     
					this.navTo("SegundaVista",{});
				
		},

	});
});