sap.ui.define([
  "sap/ui/core/mvc/Controller",
  "../utils/Utils",
  "../controller/BaseController",
  "../utils/FactoryCall"
], function (Controller, Utils, BaseController, FactoryCall) {
  "use strict";

  return BaseController.extend("test462v1s.test462v1s.controller.GoTerceraVista", {

    onInit: function () {
      let oRouter = this.getRouter();
      oRouter.getRoute("GoTerceraVista").attachMatched(this.onRouteMatchedDetail, this);
    },

    onRouteMatchedDetail: function (oEvent) {
      let oArgs = oEvent.getParameter("arguments");
      
      Utils.setParameterBindings(this);
      
	const oSession = [
	function (that){
	},
	function (that){
				that.getUser();
 },
  function (that){
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
	*Funcion --> GoSegundaVista
	*@method
	*
	*/
		GoSegundaVista: function(){
		
			
			
			
			
		     
					this.navTo("SegundaVista",{});
				
		},
	/**
	*Funcion --> getUser
	*@method
	*
	*/
		getUser: function(){
		
			
			
			
				Utils.Session(this,this.getView(), "ReadSession", "User", "User");
			
		},

	});
});