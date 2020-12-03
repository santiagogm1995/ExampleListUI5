sap.ui.define([
  "sap/ui/core/mvc/Controller",
  "../utils/Utils",
  "../controller/BaseController",
  "../utils/FactoryCall"
], function (Controller, Utils, BaseController, FactoryCall) {
  "use strict";

  return BaseController.extend("test462v1s.test462v1s.controller.DefaultAdminHomePage", {

    onInit: function () {
      let oRouter = this.getRouter();
      oRouter.getRoute("DefaultAdminHomePage").attachMatched(this.onRouteMatchedDetail, this);
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
	*Funcion --> Coche
	*@method
	*
	*/
		Coche: function(){
		
			
			
			
			
		     
					this.navTo("CocheListPage",{});
				
		},
	/**
	*Funcion --> goBack
	*@method
	*
	*/
		goBack: function(){
		
			
			
			
			
		},
	/**
	*Funcion --> Persona
	*@method
	*
	*/
		Persona: function(){
		
			
			
			
			
		     
					this.navTo("PersonaListPage",{});
				
		},
	/**
	*Funcion --> Libro
	*@method
	*
	*/
		Libro: function(){
		
			
			
			
			
		     
					this.navTo("LibroListPage",{});
				
		},

	});
});