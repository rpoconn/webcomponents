
// This class contains the ServiceLayer for HTMLTest.
define(function() {



    App.RPCServices = function() {

        this.serviceURL = "http://localhost:8080/";
        $.ajaxSettings = {crossDomain:true, dataType:"jsonp"};

        if (App.service) {
            throw "Only instantiate one App.RPCServices class";
        }
    }

    /** Configuration */
    App.RPCServices.prototype.login = function(username, password, callback) {

        //window.userName = username;
        //window.password = password;

        var jqxhr = $.getJSON(this.serviceURL + 'login?userID='+encodeURIComponent(username), {data:user});
        jqxhr.done(callback);
        jqxhr.fail(this.errorHandler);
        jqxhr.complete(this.completeHandler);
    }


    App.RPCServices.prototype.GetAllUsers = function(callback) {

        var jqxhr = $.getJSON(this.serviceURL + 'users?method=GET');
        jqxhr.done(callback);
        jqxhr.fail(this.errorHandler);
        jqxhr.complete(this.completeHandler);
    }

    App.RPCServices.prototype.GetAllMessages = function(callback) {

        var jqxhr = $.getJSON(this.serviceURL + 'messages?method=GET');
        jqxhr.done(callback);
        jqxhr.fail(this.errorHandler);
        jqxhr.complete(this.completeHandler);
    }

    App.RPCServices.prototype.AddUser = function(user, callback) {

        var jqxhr = $.getJSON(this.serviceURL + 'users?method=ADD', {data:user});
        jqxhr.done(callback);
        jqxhr.fail(this.errorHandler);
        jqxhr.complete(this.completeHandler);
    }

    App.RPCServices.prototype.AddMessage = function(message, callback) {

        var jqxhr = $.getJSON(this.serviceURL + 'messages?method=ADD', {data:message});
        jqxhr.done(callback);
        jqxhr.fail(this.errorHandler);
        jqxhr.complete(this.completeHandler);
    }

    App.RPCServices.prototype.UpdateUser = function(user, callback) {

        var jqxhr = $.getJSON(this.serviceURL + 'users?method=UPDATE', {data:user});
        jqxhr.done(callback);
        jqxhr.fail(this.errorHandler);
        jqxhr.complete(this.completeHandler);
    }

    App.RPCServices.prototype.UpdateMessage = function(message, callback) {

        this.serviceParams.clone();

        var jqxhr = $.getJSON(this.serviceURL + 'messages?method=UPDATE', {data:message});
        jqxhr.done(callback);
        jqxhr.fail(this.errorHandler);
        jqxhr.complete(this.completeHandler);
    }

    App.RPCServices.prototype.DeleteUser = function(user, callback) {

        var jqxhr = $.getJSON(this.serviceURL + 'users?method=DELETE', {data:user});
        jqxhr.done(callback);
        jqxhr.fail(this.errorHandler);
        jqxhr.complete(this.completeHandler);
    }

    App.RPCServices.prototype.DeleteMessage = function(message, callback) {

        var jqxhr = $.getJSON(this.serviceURL + 'messages?method=DELETE', {data:message});
        jqxhr.done(callback);
        jqxhr.fail(this.errorHandler);
        jqxhr.always(this.completeHandler);
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