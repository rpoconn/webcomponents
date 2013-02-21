"use strict";

// Home View
define(function() {
        App.HomeView = Backbone.View.extend({
            tagName: "div",
            className: "HomeView",
            events: { },
            initialize: function() {
                this.listenTo(this.model, "change:state", this.onViewChange);
                this.render.apply(this);
            },
            render: function() {
                 this.$el.html("<strong>HOME VIEW</strong>");
            }
        });
    })