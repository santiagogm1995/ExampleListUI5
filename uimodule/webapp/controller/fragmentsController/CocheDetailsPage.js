sap.ui.define(
  [
    "test462v1s/test462v1s/controller/BaseController",
    "test462v1s/test462v1s/utils/FactoryCall",
    "sap/ui/model/json/JSONModel"
  ],
  function(BaseController, FactoryCall, JSONModel) {
    "use strict";
    return BaseController.extend("test462v1s.test462v1s.controller.fragmentsController.CocheDetailsPage", {
		constructor: function (oView) {
			this.oView = oView;
		},
		add: async function() {
		this.getView()
            .byId("key")
            .getValue() === ""
            ? await FactoryCall.getProvider("ajax").post("/api", "/Coche", {
				 	Modelo: this.getView().byId("Modelo").getValue(),
					Litros: this.getView().byId("Litros").getValue()==""?"0.00":this.getView().byId("Litros").getValue(),
					ImagenfileName: this.getView().byId("Imagen").getValue(),
					Imagen: this.getView().byId("ImagenValue").getValue().split(",")[1],
          }): await FactoryCall.getProvider("ajax").put("/api", "/Coche/", this.getView().byId("key").getValue() , {
				 	Modelo: this.getView().byId("Modelo").getValue(),
					Litros: this.getView().byId("Litros").getValue()==""?"0.00":this.getView().byId("Litros").getValue(),
					ImagenfileName: this.getView().byId("Imagen").getValue(),
					Imagen: this.getView().byId("ImagenValue").getValue().split(",")[1],
          });

          let oReturn = await FactoryCall.getProvider("ajax").getAll(
            "/api",
            "/Coches"
          );
          this.setModel(new JSONModel({ CocheCollection: oReturn }), "CocheList");

			this.oView.byId("key").setValue(oReturn.id);
				 	 this.oView.byId("Modelo").setValue("");
					this.oView.byId("Litros").setValue("");
					this.oView.byId("Imagen").setValue("");
					this.oView.byId("ImagenValue").setValue("");
	  	  this.oView.byId("BotonAceptar").setText("Create");
          this.close();
        },
			onChangeImagen: function(oEvent) {
	          var reader = new FileReader();
	          var file = oEvent.getParameter("files")[0];
	          
	          var oBlob = new Blob([file], { type: "text/plain" });
	
	          this.getView().byId("Dialog").setBusy(true);
	          reader.onload = e => {
	            this.getView()
	              .byId("ImagenValue")
	              .setValue(e.target.result);
	            this.getView()
	              .byId("Dialog")
	              .setBusy(false);
	          };
	
	          reader.readAsDataURL(oBlob);
	        },
		
		open: async function(action) {
          if (!this.oView.byId("Dialog")) {
            let oDialog = sap.ui.xmlfragment(
              this.oView.getId(),
              "test462v1s.test462v1s.view.fragments.CocheDetailsPage",
              this
            );
            this.oView.addDependent(oDialog);
            oDialog.open();
          } else {
            this.byId("Dialog").open();
          }
          
          if (action) {
            let sId = null;
            this.getView()
              .byId("Dialog")
              .setBusy(true);
              
            this.getView()
              .byId("CocheList")
              .getSelectedItems()
              .forEach((a) => (sId = a.mAggregations.cells[0].getText()));
            let oReturn = await FactoryCall.getProvider("ajax").get(
              "/api",
              "/Coche",
              `/${sId}`
            );

			this.oView.byId("key").setValue(oReturn.id);
				 	 this.oView.byId("Modelo").setValue(oReturn.Modelo);
					this.oView.byId("Litros").setValue(oReturn.Litros);
					this.oView.byId("Imagen").setValue(oReturn.ImagenfileName);
					this.oView.byId("ImagenValue").setValue(oReturn.Imagen);
	        
            this.oView.byId("BotonAceptar").setText("Update");

            this.getView()
              .byId("Dialog")
              .setBusy(false);
          }
        },
        
        close: function() {
          this.getView()
            .byId("Dialog")
            .close();
        }
    });
});