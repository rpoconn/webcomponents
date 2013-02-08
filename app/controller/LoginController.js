"use strict";

define(["model/LoginModel", "view/LoginView", "clientService/RPCServices"], function() {

    App.LoginController = function(appModel) {
        _.extend(this, Backbone.Events);
        this.model = new App.LoginModel({appModel:appModel});
        this.view = new App.LoginView({model:this.model});
        this.view.on("login", this.login)
    }

    App.LoginController.prototype.login = function(username, password) {
        console.log('Logging in');
        var that = this;
        function onSucess(result) {
            console.log('Login result' + result);
            that.model.get('appModel').set({state:App.AppStates.MAIN,
                userRole:result.userRole});
        }
        App.service.login(username, password, onSucess);


    }

})
