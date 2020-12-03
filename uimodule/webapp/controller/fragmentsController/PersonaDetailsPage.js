sap.ui.define(
  [
    "test462v1s/test462v1s/controller/BaseController",
    "test462v1s/test462v1s/utils/FactoryCall",
    "sap/ui/model/json/JSONModel"
  ],
  function(BaseController, FactoryCall, JSONModel) {
    "use strict";
    return BaseController.extend("test462v1s.test462v1s.controller.fragmentsController.PersonaDetailsPage", {
		constructor: function (oView) {
			this.oView = oView;
		},
		add: async function() {
		this.getView()
            .byId("key")
            .getValue() === ""
            ? await FactoryCall.getProvider("ajax").post("/api", "/Persona", {
				 	Dni: this.getView().byId("Dni").getValue(),
				 	Apellidos: this.getView().byId("Apellidos").getValue(),
					Edad: Number(this.getView().byId("Edad").getValue()), 
					Estado: this.getView().byId("Estado").getSelected().toString(),
          }): await FactoryCall.getProvider("ajax").put("/api", "/Persona/", this.getView().byId("key").getValue() , {
				 	Dni: this.getView().byId("Dni").getValue(),
				 	Apellidos: this.getView().byId("Apellidos").getValue(),
					Edad: Number(this.getView().byId("Edad").getValue()), 
					Estado: this.getView().byId("Estado").getSelected().toString(),
          });

          let oReturn = await FactoryCall.getProvider("ajax").getAll(
            "/api",
            "/Personas"
          );
          this.setModel(new JSONModel({ PersonaCollection: oReturn }), "PersonaList");

			this.oView.byId("key").setValue(oReturn.id);
				 	 this.oView.byId("Dni").setValue("");
				 	 this.oView.byId("Apellidos").setValue("");
					this.oView.byId("Edad").setValue("");
					this.getView().byId("Estado").setSelected(false);
	  	  this.oView.byId("BotonAceptar").setText("Create");
          this.close();
        },
		
		open: async function(action) {
          if (!this.oView.byId("Dialog")) {
            let oDialog = sap.ui.xmlfragment(
              this.oView.getId(),
              "test462v1s.test462v1s.view.fragments.PersonaDetailsPage",
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
              .byId("PersonaList")
              .getSelectedItems()
              .forEach((a) => (sId = a.mAggregations.cells[0].getText()));
            let oReturn = await FactoryCall.getProvider("ajax").get(
              "/api",
              "/Persona",
              `/${sId}`
            );

			this.oView.byId("key").setValue(oReturn.id);
				 	 this.oView.byId("Dni").setValue(oReturn.Dni);
				 	 this.oView.byId("Apellidos").setValue(oReturn.Apellidos);
					this.oView.byId("Edad").setValue(oReturn.Edad);
					this.getView().byId("Estado").setSelected(oReturn.Estado);
	        
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