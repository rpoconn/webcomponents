"use strict";

define(['components/ViewStack', 'controller/UserController', 'controller/MessageController', 'view/HomeView'], function () {

    App.MainViewStack = Backbone.View.extend({
        tagName: "div",
        className: "Stretcher",
        events: {},
        stack: null,
        initialize: function() {
            this.render();
        },
        setViewIndex: function(index) {
            this.stack.setViewIndex(index);
        },
        render: function() {
            this.stack = new App.ViewStack();
            this.el.appendChild(this.stack.el);
            var depotsController = new App.UserController({model:this.model.get('appModel')});
            var bundlesController = new App.MessageController({model:this.model.get('appModel')});
            var home = new App.HomeView({model:this.model.get('appModel')});
            var items = [home.el, depotsController.view.el, bundlesController.view.el];
            this.stack.setViewItems(items);
            this.stack.setViewIndex(0);
        }
    });
});