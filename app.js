
"use strict";


var App = {
    start: function() {

        Backbone.$ = $;

        requirejs.config({
            //By default load any module IDs from js/lib
            baseUrl: './app'
        });
        require(["controller/AppController"], function() {
            var app = new App.AppController();
        });
    }
};

App.start();
