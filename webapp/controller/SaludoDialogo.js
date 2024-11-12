sap.ui.define([
    "sap/ui/base/ManagedObject",
    "sap/ui/core/Fragment"
], function (ManagedObject, Fragment) {
    'use strict';

    return ManagedObject.extend("sap.ui.demo.walkthrough.controller.SaludoDialogo", {
        constructor: function (oView) {
            this._oView = oView;
        },
        exit: function () {
            delete this._oView;
        },
        open: function () {
            var oView = this._oView;

            if (!oView.byId("idDialog")) {
                var oFragmentController = {
                    onCloseDialog: function () {
                        oView.byId("idDialog").close();
                    }
                }

                Fragment.load({
                    id: oView.getId(),
                    name: "sap.ui.demo.walkthrough.view.Fragmento1",
                    controller: oFragmentController
                }).then(function (oDialog) {
                    oView.addDependent(oDialog);
                    oDialog.open();
                });
            } else {
                oView.byId("idDialog").open();

            }

        }
    });
});
