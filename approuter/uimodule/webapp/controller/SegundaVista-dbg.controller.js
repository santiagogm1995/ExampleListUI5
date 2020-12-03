sap.ui.define([
  "sap/ui/core/mvc/Controller",
  "../utils/Utils",
  "../controller/BaseController",
  "../utils/FactoryCall"
], function (Controller, Utils, BaseController, FactoryCall) {
  "use strict";

  return BaseController.extend("test462v1s.test462v1s.controller.SegundaVista", {

    onInit: function () {
      let oRouter = this.getRouter();
      oRouter.getRoute("SegundaVista").attachMatched(this.onRouteMatchedDetail, this);
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
	*Funcion --> DetailPerson
	*@method
	*
	*@param IdPersona 
	*/
		DetailPerson: function(){
		
			
			
			let IdPersona = this.getView().byId("IdPersona").getValue();
			
			
			if( IdPersona != "" ){
					this.getOwnerComponent().setModel(
					new sap.ui.model.json.JSONModel({
		             Parameters: [{ IdPersona: IdPersona }]
		             }),
		            "Parameters"
		          	);
		     
					this.navTo("DetailPage",{});
				
			}
		},
	/**
	*Funcion --> ShowPassword
	*@method
	*
	*/
		ShowPassword: function(){
		
			this.getView().byId("TuPassword").setType(this.getView().byId("TuPassword").getType() =="Password"?"Text":"Password")
this.getView().byId("ShowPassword").setText(this.getView().byId("ShowPassword").getText() =="ShowPassword"?"HidePassword":"ShowPassword")
			
			
			
		},
	/**
	*Funcion --> GoTerceraVista
	*@method
	*
	*/
		GoTerceraVista: function(){
		
			
			
			
			
		     
					this.navTo("GoTerceraVista",{});
				
		},
	/**
	*Funcion --> GoHome
	*@method
	*
	*/
		GoHome: function(){
		
			
			
			
			
		     
					this.navTo("Home",{});
				
		},

	});
});