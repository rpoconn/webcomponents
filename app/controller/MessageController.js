"use strict";

define(["model/AllMessagesModel", "view/AllBundles", "clientService/RPCServices", "clientService/data/BundleVO"], function() {

    App.MessageController = function(appModel) {
        _.extend(this, Backbone.Events);
        this.model = new App.AllMessagesModel({appModel:appModel});
        this.view = new App.AllBundles({model:this.model});
        this.getAllBundles();
    }

    App.MessageController.prototype.getAllBundles = function() {
        console.log('Getting All Bundles');
        var that = this;
        var allBundles = [];
        var allBundleUUIDs = [];
        function onGetBundles(response) {
            for ( var bundleIndex in response.bundles) {
                var bundle = response.bundles[bundleIndex];
                allBundles.push(new App.BundleVO(bundle));
            }
            that.model.set('bundles', allBundles);
        }
        function onSuccess(result) {
            allBundleUUIDs = result.bundleUris;
            App.service.getBundleMetadata(allBundleUUIDs, onGetBundles);

            console.log('GetAllBundles result' + result);
        }
        App.service.getAllBundleIds(onSuccess);
    }
});
