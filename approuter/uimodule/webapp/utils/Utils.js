sap.ui.define(["sap/ui/model/json/JSONModel","sap/m/MessageBox","../utils/Store"],function(e,t){"use strict";return{buildMessageBox:function e(n,o,...s){t.confirm(n.getModel("i18n").getResourceBundle().getText("delConfirm"),{actions:s,onClose:o})},showMessageBox:function e(t,n){switch(t){case"Warning":sap.m.MessageBox.alert(n,{title:"Alert",onClose:null,styleClass:"",initialFocus:null,textDirection:sap.ui.core.TextDirection.Inherit});break;case"Error":sap.m.MessageBox.error(n,{title:"Error",onClose:null,styleClass:"",initialFocus:null,textDirection:sap.ui.core.TextDirection.Inherit});break;case"Info":sap.m.MessageBox.information(n,{title:"Information",onClose:null,styleClass:"",initialFocus:null,textDirection:sap.ui.core.TextDirection.Inherit});break;default:break}},Session:function(t,n,o,s,r){const a={ReadSession:function(){const e=t.getOwnerComponent().getModel(s).getData().value;n.byId(r).setValue(e)},WriteSession:function(){t.getOwnerComponent().setModel(new e({value:n.byId(r).getValue()}),s)},DeleteSession:function(){t.getOwnerComponent().setModel(null,s)}};a[o]()},getCurrentUser:function(){let e=null;jQuery.ajax({type:"GET",contentType:"application/json",url:"/services/userapi/attributes?multiValuesAsArrays=true",dataType:"json",async:false,success:function(t){e=t}});return e},setParameterBindings:function(t){if(t.getOwnerComponent().getModel("Parameters")!==undefined){t.getOwnerComponent().getModel("Parameters").getData().Parameters.forEach(e=>{Object.keys(e).forEach(n=>t.getView().byId(n).setValue(e[n]))});t.getOwnerComponent().getModel("Parameters").destroy()}t.getOwnerComponent().setModel(new e({Parameters:[]}),"Parameters")}}});