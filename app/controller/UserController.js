"use strict";

define(["model/AllUsersModel", "view/AllUsers", "clientService/RPCServices", "clientService/data/UserVO"], function() {

    App.UserController = function(appModel) {
        _.extend(this, Backbone.Events);
        this.model = new App.AllUsersModel({appModel:appModel});
        this.view = new App.AllDepots({model:this.model});
        this.getAllUsers();
        ///this.view.on("login", this.login)
    }

    App.UserController.prototype.getAllUsers = function() {
        console.log('Getting All depots');
        var that = this;

        function onSuccess(result) {
            var allUsers = []
            for (var user in result.users) {
                allUsers.push(new App.UserVO(result.users[user]));
            }
            that.model.set('users', allUsers);
            console.log('GetAllUsers result' + result);
        }
        App.service.getAllUsers(onSuccess);
    }
});
