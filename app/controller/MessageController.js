"use strict";

define(["model/AllMessagesModel", "view/AllMessages", "clientService/RPCServices", "clientService/data/MessageVO"], function() {

    App.MessageController = function(appModel) {
        _.extend(this, Backbone.Events);
        this.model = new App.AllMessagesModel({appModel:appModel});
        this.view = new App.AllMessages({model:this.model});
        this.getAllMessages();
    }

    App.MessageController.prototype.getAllMessages = function() {
        console.log('Getting All Messages');
        var that = this;

        function onGetMessages(response) {
            var allMessages = [];
            for ( var messageIndex in response.messages) {
                var message = response.messages[messageIndex];
                allMessages.push(new App.MessageVO(message));
            }
            that.model.set('messages', allMessages);
            console.log('GetAllMessages result' + response);
        }
        App.service.getAllMessages(onGetMessages);
    }
});
