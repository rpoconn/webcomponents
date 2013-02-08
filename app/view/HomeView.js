"use strict";

// Home View
define(function() {
        App.HomeView = Backbone.View.extend({
            tagName: "div",
            className: "HomeView",
            background: null,
            loginView: null,
            mainAppView: null,
            currentView: null,
            events: { },
            initialize: function() {
                this.listenTo(this.model, "change:state", this.onViewChange);
                var loginController = new App.LoginController(this.model);
                this.loginView = loginController.view;
                this.render.apply(this);
            },
            createMainView: function() {
                var mainViewController = new App.MainViewController(this.model);
                this.mainAppView = mainViewController.view;
            },
            onViewChange: function() {
                if (this.currentView) {
                    this.el.removeChild(this.currentView.el);
                }
                switch (this.model.get('state')) {
                    case App.AppStates.LOGIN:
                        this.currentView = this.loginView;
                        break;
                    case App.AppStates.MAIN:
                        if (!this.mainAppView) {
                            this.createMainView();
                        }
                        this.currentView = this.mainAppView;
                        break;
                    default:
                        throw new Error("Unknown view: " + this.model.get('state'));
                        break;
                }
                this.el.appendChild(this.currentView.el);
            },
            render: function() {
                if (!this.background) {
                    this.background = new App.Background();
                    this.el.appendChild(this.background.el);
                }
                this.onViewChange();
            }
        });
    })