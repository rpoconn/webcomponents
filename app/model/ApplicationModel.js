"use strict";

define(["model/AppStates"], function() {
    App.ApplicationModel = Backbone.Model.extend({
        defaults: function() {
            return {
                state:App.AppStates.LOGIN,
                user:null
            }
        },
        initialize: function() {  }

    });
});

