"use strict";

define(["model/AllUsersModel", "view/AllUsers", "clientService/RPCServices", "clientService/data/DepotVO"], function() {

    App.UserController = function(appModel) {
        _.extend(this, Backbone.Events);
        this.model = new App.AllUsersModel({appModel:appModel});
        this.view = new App.AllDepots({model:this.model});
        this.getAllDepots();
        ///this.view.on("login", this.login)
    }

    App.UserController.prototype.getAllDepots = function() {
        console.log('Getting All depots');
        var that = this;
        var allDepots = [];
        var allDepotUUIDs = [];

        function onGetDepot(depot) {
            allDepots.push(new App.DepotVO(depot));
            if (allDepotUUIDs.length == allDepots.length) {
                that.model.set('depots', allDepots);
            }
        }
        function onSuccess(result) {
            allDepotUUIDs = result.depots;
            for (var index in allDepotUUIDs) {
                var uuid = allDepotUUIDs[index];
                App.service.getDepot(uuid, onGetDepot);
            }
            if (!allDepotUUIDs.length) {
                that.model.set('depots', allDepots);
            }
            console.log('GetAllDepots result' + result);
        }
        App.service.getAllDepotUUIDs(onSuccess);
    }
});
