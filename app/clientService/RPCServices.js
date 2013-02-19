
// This class contains the ServiceLayer for HTMLTest.
define(function() {



    App.RPCServices = function() {

        this.serviceURL = "http://localhost:8080/";
        $.ajaxSettings.crossDomain = true;
        $.ajaxSettings.dataType = "jsonp";
        $.ajaxSettings.accepts = "jsonp";
        $.ajaxSettings.cache = false;
        $.ajaxSettings.fail = this.errorHandler;
        $.ajaxSettings.complete = this.completeHandler;

        if (App.service) {
            throw "Only instantiate one App.RPCServices class";
        }
    }

    /** Configuration */
    App.RPCServices.prototype.login = function(username, password, callback) {

        //window.userName = username;
        //window.password = password;

        $.ajax({url:this.serviceURL + 'login', data: {username:username, password:password}, success:callback});
    }

    App.RPCServices.prototype.getAllUsers = function(callback) {
        $.ajax({url:this.serviceURL + 'users?method=GET', success:callback});
    }

    App.RPCServices.prototype.getAllMessages = function(callback) {
       $.ajax({url:this.serviceURL + 'messages?method=GET', success:callback});
    }

    App.RPCServices.prototype.addUser = function(user, callback) {
       $.getJSON({url:this.serviceURL + 'users?method=ADD', data:user, success:callback});
    }

    App.RPCServices.prototype.addMessage = function(message, callback) {
       $.ajax({url:this.serviceURL + 'messages?method=ADD', data:message, success:callback});
    }

    App.RPCServices.prototype.updateUser = function(user, callback) {
        $.ajax({url:this.serviceURL + 'users?method=UPDATE', data:user, success:callback});
    }

    App.RPCServices.prototype.updateMessage = function(message, callback) {
        $.ajax({url:this.serviceURL + 'messages?method=UPDATE', data:message, success:callback});
    }

    App.RPCServices.prototype.deleteUser = function(user, callback) {
        $.ajax({url:this.serviceURL + 'users?method=DELETE', data:user, success:callback});
    }

    App.RPCServices.prototype.deleteMessage = function(message, callback) {
        $.ajax({url:this.serviceURL + 'messages?method=DELETE', data:message, success:callback});
    }

    /** Error handlers */

    App.RPCServices.prototype.errorHandler = function(error) {
        console.log("RPCServices: Error encountered" + error.toString());
        throw new Error("RPCServices: Error encountered" + error.toString());
    }

    App.RPCServices.prototype.completeHandler = function(data) {
        console.log("RPCServices: CallComplete: " + data.toString());
    }

    /** Singleton */
    App.service = new App.RPCServices();

});