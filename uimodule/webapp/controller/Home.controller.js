sap.ui.define([
  "sap/ui/core/mvc/Controller",
  "../utils/Utils",
  "../controller/BaseController",
  "../utils/FactoryCall"
], function (Controller, Utils, BaseController, FactoryCall) {
  "use strict";

  return BaseController.extend("test462v1s.test462v1s.controller.Home", {

    onInit: function () {
      let oRouter = this.getRouter();
      oRouter.getRoute("Home").attachMatched(this.onRouteMatchedDetail, this);
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
				that.eventoOnInit();
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
	*Funcion --> eventoOnInit
	*@method
	*
	*/
		eventoOnInit: function(){
		
			alert("Hola MUNDO !!");
			
			
			
		},
	/**
	*Funcion --> login
	*@method
	*
	*@param Password 
	*/
		login: function(){
		
			
			
			let Password = this.getView().byId("Password").getValue();
			
			
			if( Password == 1234 ){
					this.getOwnerComponent().setModel(
					new sap.ui.model.json.JSONModel({
		             Parameters: [{ TuPassword: Password }]
		             }),
		            "Parameters"
		          	);
		     
					this.navTo("SegundaVista",{});
				
			}
		},
	/**
	*Funcion --> SaveUser
	*@method
	*
	*/
		SaveUser: function(){
		
			
			
			
				Utils.Session(this,this.getView(), "WriteSession", "User", "Usuario");
			
		},
	/**
	*Funcion --> CRUD
	*@method
	*
	*/
		CRUD: function(){
		
			
			
			
			
		     
					this.navTo("DefaultAdminHomePage",{});
				
		},

	});
});