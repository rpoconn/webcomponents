"use strict";


define(function () {

    App.AppTitleBar = Backbone.View.extend({
        tagName: "div",
        className: "AppTitleBar",
        events: {},
        initialize: function() {
            this.render();
        },
        render: function() {
            this.listenTo(this.model.get('appModel'), "change:userRole", this.onUserUpdated);
            this.el.innerHTML = this.mainLayout;
            this.onUserUpdated(this.model.get('appModel'));
        },
        onUserUpdated: function(model) {
            if (model.has('userRole')) {
                this.el.children[3].textContent =  model.get('userRole').username;
            }
        },
        mainLayout: "<img src='assets/img/companyLogo.png'  class='floatLeft' style=' padding-right: 15px; width: 25px; height:25px;'  />" +
                    "<span class='titleBarText floatLeft'>HTMLTest</span>" +
                    "<span class='whiteText smallMargins floatRight'>Help</span>" +
                    "<span id='username' class='rightSeparator smallMargins floatRight'></span>"






    });

});