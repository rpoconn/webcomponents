
// This class contains the ServiceLayer for HTMLTest.
define(function() {

    var serviceURL = "http://192.168.129.165:8443/RPC2";

    App.RPCServices = function() {

        if (App.service) {
            throw "Only instantiate one App.RPCServices class";
        }

        this.service = new rpc.ServiceProxy(serviceURL,  {
                asynchronous: true,  //default value, but if otherwise error raised
                protocol: "XML-RPC",//default value, but if otherwise error raised
                sanitize: false,     //explicit false required, otherwise error raised
                crossSite: true,
                methods: ['GetUserRole',
                        'GetAllUsers',
                        'GetAllMessages' ] //explicit list required, otherwise error raised
                });

    }

    /** Configuration */

    App.RPCServices.prototype.login = function(username, password, callback) {

        window.userName = username;
        window.password = password;

        this.service.Login({
            params: [],
            onSuccess:	callback,
            onException: this.errorHandler,
            onComplete: this.completeHandler
        });
    }


    App.RPCServices.prototype.GetAllUsers = function(callback) {

        this.service.GetAllUsers({
            params: [],
            onSuccess:	callback,
            onException: this.errorHandler,
            onComplete: this.completeHandler
        });
    }

    App.RPCServices.prototype.GetAllMessages = function(callback) {

        this.service.GetAllMessages({
            params: [],
            onSuccess:	callback,
            onException: this.errorHandler,
            onComplete: this.completeHandler
        });
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