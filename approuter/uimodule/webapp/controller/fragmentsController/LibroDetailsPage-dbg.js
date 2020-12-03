sap.ui.define(
  [
    "test462v1s/test462v1s/controller/BaseController",
    "test462v1s/test462v1s/utils/FactoryCall",
    "sap/ui/model/json/JSONModel"
  ],
  function(BaseController, FactoryCall, JSONModel) {
    "use strict";
    return BaseController.extend("test462v1s.test462v1s.controller.fragmentsController.LibroDetailsPage", {
		constructor: function (oView) {
			this.oView = oView;
		},
		add: async function() {
		this.getView()
            .byId("key")
            .getValue() === ""
            ? await FactoryCall.getProvider("ajax").post("/api", "/Libro", {
				 	Nombre: this.getView().byId("Nombre").getValue(),
					FechaPublicacion: new Date(this.getView().byId("FechaPublicacion").getValue()),
				 	Autor: this.getView().byId("Autor").getValue(),
					Paginas: Number(this.getView().byId("Paginas").getValue()), 
					FicherofileName: this.getView().byId("Fichero").getValue(),
					Fichero: this.getView().byId("FicheroValue").getValue().split(",")[1],
          }): await FactoryCall.getProvider("ajax").put("/api", "/Libro/", this.getView().byId("key").getValue() , {
				 	Nombre: this.getView().byId("Nombre").getValue(),
					FechaPublicacion: new Date(this.getView().byId("FechaPublicacion").getValue()),
				 	Autor: this.getView().byId("Autor").getValue(),
					Paginas: Number(this.getView().byId("Paginas").getValue()), 
					FicherofileName: this.getView().byId("Fichero").getValue(),
					Fichero: this.getView().byId("FicheroValue").getValue().split(",")[1],
          });

          let oReturn = await FactoryCall.getProvider("ajax").getAll(
            "/api",
            "/Libros"
          );
          this.setModel(new JSONModel({ LibroCollection: oReturn }), "LibroList");

			this.oView.byId("key").setValue(oReturn.id);
				 	 this.oView.byId("Nombre").setValue("");
				 	 this.oView.byId("FechaPublicacion").setValue("");
				 	 this.oView.byId("Autor").setValue("");
					this.oView.byId("Paginas").setValue("");
					this.oView.byId("Fichero").setValue("");
					this.oView.byId("FicheroValue").setValue("");
	  	  this.oView.byId("BotonAceptar").setText("Create");
          this.close();
        },
			onChangeFichero: function(oEvent) {
	          var reader = new FileReader();
	          var file = oEvent.getParameter("files")[0];
	          
	          var oBlob = new Blob([file], { type: "text/plain" });
	
	          this.getView().byId("Dialog").setBusy(true);
	          reader.onload = e => {
	            this.getView()
	              .byId("FicheroValue")
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
              "test462v1s.test462v1s.view.fragments.LibroDetailsPage",
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
              .byId("LibroList")
              .getSelectedItems()
              .forEach((a) => (sId = a.mAggregations.cells[0].getText()));
            let oReturn = await FactoryCall.getProvider("ajax").get(
              "/api",
              "/Libro",
              `/${sId}`
            );

			this.oView.byId("key").setValue(oReturn.id);
				 	 this.oView.byId("Nombre").setValue(oReturn.Nombre);
				 	 this.oView.byId("FechaPublicacion").setValue(oReturn.FechaPublicacion);
				 	 this.oView.byId("Autor").setValue(oReturn.Autor);
					this.oView.byId("Paginas").setValue(oReturn.Paginas);
					this.oView.byId("Fichero").setValue(oReturn.FicherofileName);
					this.oView.byId("FicheroValue").setValue(oReturn.Fichero);
	        
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