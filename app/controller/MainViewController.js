"use strict";

define(["model/MainViewModel", "view/MainView"], function() {

    App.MainViewController = function(appModel) {
        this.model = new App.MainViewModel({appModel:appModel});
        this.view = new App.MainView({model:this.model});
    }

})
