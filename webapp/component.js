sap.ui.define(
  [
    "sap/ui/core/UIComponent",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/resource/ResourceModel",
    "./controller/SaludoDialogo"
  ],
  function (UIComponent, JSONModel, ResourceModel, SaludoDialogo) {
    "use strict";
    return UIComponent.extend("sap.ui.demo.walkthrough.Component", {
      metadata: {
        manifest: "json"
      },
      init: function () {
        UIComponent.prototype.init.apply(this, arguments);

        var oData = {
          recipient: {
            name: "Usuario"
          }
        };
        var oModel = new JSONModel(oData);
        this.setModel(oModel);

        this._saludoDialog = new SaludoDialogo(this.getRootControl());
      },
      exit: function () {
        this._saludoDialog.destroy();
        delete this._saludoDialog;
      },
      openSaludoDialogo: function () {
        this._saludoDialog.open();
      }
    });

  });
