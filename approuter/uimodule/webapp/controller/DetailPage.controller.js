sap.ui.define(["sap/ui/core/mvc/Controller","../utils/Utils","../controller/BaseController","../utils/FactoryCall"],function(t,e,n,i){"use strict";return n.extend("test462v1s.test462v1s.controller.DetailPage",{onInit:function(){let t=this.getRouter();t.getRoute("DetailPage").attachMatched(this.onRouteMatchedDetail,this)},onRouteMatchedDetail:function(t){let n=t.getParameter("arguments");e.setParameterBindings(this);const i=[function(t){},function(t){},function(t){t.CallApi()}];i.forEach(t=>t(this))},showWarning:function(){},showError:function(){},showInfo:function(){},CallApi:function(){(function(t){var e={url:"https://rickandmortyapi.com/api/character/"+t.getView().byId("IdPersona").getValue(),method:"GET",timeout:0};$.ajax(e).done(function(e){t.getView().byId("Nombre").setValue(e.name);t.getView().byId("Status").setValue(e.status);t.getView().byId("Specie").setValue(e.species);t.getView().byId("Gender").setValue(e.gender)})})(this)},GoBack:function(){this.navTo("SegundaVista",{})}})});