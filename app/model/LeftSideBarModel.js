"use strict";

define(function() {
    App.LeftSideBarModel = Backbone.Model.extend({
        initialize: function() { this.set('items', [
                                {name:"Home", icon:"assets/img/home.gif", key:'0'},
                                {name:"Users", icon:"assets/img/users.jpeg", key:'1'},
                                {name:"Messages", icon:"assets/img/messages.jpg", key:'2'}]);
        }
    });
});

