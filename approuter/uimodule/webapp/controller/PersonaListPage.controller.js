sap.ui.define(["sap/ui/model/json/JSONModel","../controller/BaseController","../controller/fragmentsController/PersonaDetailsPage","../utils/FactoryCall"],function(e,t,s,n){"use strict";return t.extend("test462v1s.test462v1s.controller.PersonaListPage",{onInit:function(){this._PersonaDetailsPage=new s(this.getView());const e=sap.ui.core.UIComponent.getRouterFor(this.getView());e.getRoute("PersonaListPage").attachMatched(this.onRouteMatchedDetail,this)},showWarning:function(){},CellClick:function(){},showError:function(){},Create:function(){this._PersonaDetailsPage.open(false)},Update:function(){this._PersonaDetailsPage.open(true)},showInfo:function(){},Cancel:function(){},Delete:async function(t){let s=[];this.getView().byId("PersonaList").setBusy(true);this.getView().byId("PersonaList").getSelectedItems().forEach(e=>s.push(e.mAggregations.cells[0].getText()));await Promise.all(s.map(async e=>{await n.getProvider("ajax").delete("/api","/Persona/",e)}));let o=await n.getProvider("ajax").getAll("/api","/Personas");this.setModel(new e({PersonaCollection:o}),"PersonaList");this.getView().byId("PersonaList").setBusy(false);this.check()},onRouteMatchedDetail:async function(t){let s=t.getParameter("arguments");const o=await n.getProvider("ajax").getAll("/api","/Personas");this.setModel(new e({PersonaCollection:o}),"PersonaList")},check:function(){const e=this.getView().byId("PersonaList").getSelectedContextPaths().length;this.getView().byId("updateButton").setEnabled(e===1);this.getView().byId("deleteButton").setEnabled(e>=1)}})});