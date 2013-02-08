
"use strict";

define(['model/ApplicationModel'], function() {
    App.AllUsersModel = Backbone.Model.extend({
        defaults: function() {
            return {  depots:[]
            }
        },
        initialize: function(appModel) { this.set('appModel', appModel); }

    });
});

