"use strict";


define(function() {
    App.MainViewModel = Backbone.Model.extend({
        default: function(appModel) {
            return {
                appModel:appModel
            }
        },
        initialize: function() { }

    });
});
