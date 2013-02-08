"use strict";


define(function () {

App.Background = Backbone.View.extend({
    tagName: "div",
    className: "AppBackground",
    events: {},
    initialize: function() {
        this.render();
    },
    render: function() {
        var backgroundImage = document.createElement("div");
        backgroundImage.setAttribute("class", "BackgroundImage Stretcher");
        this.el.appendChild(backgroundImage);
    }
});

});
