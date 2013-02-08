"use strict";


define(["model/AppStates"], function() {
    App.LoginModel = Backbone.Model.extend({
        default: function() {
            return {
                username:"",
                password:""
            }
        },
        initialize: function() {  }

    });
});

