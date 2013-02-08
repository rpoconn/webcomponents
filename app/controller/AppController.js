"use strict";


// Start the main app logic.
define(['view/AppView', "model/ApplicationModel"], function () {
    App.AppController = function() {
        this.model = new App.ApplicationModel();
        this.view = new App.AppView({model:this.model});
        document.body.appendChild(this.view.el);
    }
});