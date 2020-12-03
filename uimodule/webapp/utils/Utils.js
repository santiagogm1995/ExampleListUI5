sap.ui.define(
  ["sap/ui/model/json/JSONModel",
   "sap/m/MessageBox",
   "../utils/Store"],
  function(JSONModel, MessageBox) {
    "use strict";
    return {
      /**
       * @module Utils
       * */
      buildMessageBox: function buildMessageBox(oView, oFunction, ...actions) {
      MessageBox.confirm(
        oView
          .getModel("i18n")
          .getResourceBundle()
          .getText("delConfirm"),
        {
          actions: actions,
          onClose: oFunction
        }
      );
    },
      showMessageBox: function showMessageBox(sType, sText) {
      switch (sType) {
        case "Warning":
          sap.m.MessageBox.alert(sText, {
            title: "Alert", // default
            onClose: null, // default
            styleClass: "", // default
            initialFocus: null, // default
            textDirection: sap.ui.core.TextDirection.Inherit // default
          });
          break;
        case "Error":
          sap.m.MessageBox.error(sText, {
            title: "Error", // default
            onClose: null, // default
            styleClass: "", // default
            initialFocus: null, // default
            textDirection: sap.ui.core.TextDirection.Inherit // default
          });
          break;
        case "Info":
          sap.m.MessageBox.information(sText, {
            title: "Information", // default
            onClose: null, // default
            styleClass: "", // default
            initialFocus: null, // default
            textDirection: sap.ui.core.TextDirection.Inherit // default
          });
          break;
        default:
          /* code */
          break;
      }
    },

      /**
       * Method to save/delete/write global values in sapui5 core.
       * @method
       * @param {sap.ui.core.mvc.Controller} that controller instance
       * @param {sap.ui.mvc.View} oView view instance
       * @param {string} sOp type of operation
       * @param {string} sName name to save in model
       * @param {string} sParamView component id
       */
      Session: function(that, oView, sOp, sName, sParamView) {
        const oSession = {
          ReadSession: function() {
            const oValue = that
              .getOwnerComponent()
              .getModel(sName)
              .getData().value;
            oView.byId(sParamView).setValue(oValue);
          },
          WriteSession: function() {
            that.getOwnerComponent().setModel(
              new JSONModel({
                value: oView.byId(sParamView).getValue()
              }),
              sName
            );
          },
          DeleteSession: function() {
            that.getOwnerComponent().setModel(null, sName);
          }
        };

        oSession[sOp]();
      },

      /**
       * Get current user login in SCP
       * @method
       * @returns {object} user object
       */
      getCurrentUser: function() {
        let oUser = null;

        jQuery.ajax({
          type: "GET",
          contentType: "application/json",
          url: "/services/userapi/attributes?multiValuesAsArrays=true",
          dataType: "json",
          async: false,
          success: function(data) {
            oUser = data;
          }
        });
        return oUser;
      },

      /**
       * Get parameters between views and ser to a view components
       * @param {sap.ui.core.mvc.Controller} that
       */
      setParameterBindings: function(that) {
        if (that.getOwnerComponent().getModel("Parameters") !== undefined) {
          that
            .getOwnerComponent()
            .getModel("Parameters")
            .getData()
            .Parameters.forEach((attrib) => {
              Object.keys(attrib).forEach((key) => that
                  .getView()
                  .byId(key)
                  .setValue(attrib[key])
              );
            });
          that
            .getOwnerComponent()
            .getModel("Parameters")
            .destroy();
        }

        that
          .getOwnerComponent()
          .setModel(new JSONModel({ Parameters: [] }), "Parameters");
      }
    };
  }
);
