
"use strict";

define(['model/ApplicationModel'], function() {
    App.AllMessagesModel = Backbone.Model.extend({
        defaults: function() {
            return {  bundles:[]
            }
        },
        initialize: function(appModel) { this.set('appModel', appModel); }

    });
});

