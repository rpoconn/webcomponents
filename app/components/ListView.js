"use strict";

// This class contains the background view of the application, and manages the current viewstate of the application.
// This class's model is the ApplicationModel.
define(function() {

    App.ListView = Backbone.View.extend({
        tagName: "div",
        className: "horizontalStretch verticalStretch vmw-list-section",
        events: { "click li": 'onItemClicked' },
        initialize: function() {
            _.bindAll(this);
            this.listenTo(this.model, "change:items", this.render);
            //this.el.onItemClicked = this.onItemClicked;
            this.render.apply(this);
        },
        render: function() {
            var items = this.model.get('items');
            while(this.el.children.length) {
                this.el.removeChild(this.el.children[0]);
            }
            if (items) {
                var compiledList = _.template(this.template, {listItems:items, parentID:this});
                this.el.innerHTML = compiledList;
                var childList = this.el.firstElementChild.firstElementChild.children;
                //var parentList = this;
                //for (var node in childList) {
                //    childList[node].onclick= function(event) { parentList.onItemClicked(event) }
                //}
            }
        },
        onItemClicked: function (event) {
            var key = event.currentTarget.getAttribute('value');
            console.log("item clicked:" + event.currentTarget.firstElementChild.children[1].text + " key:" + key);
            this.trigger("clicked", key)
        },
        template: '<div >\
                        <ul class="simple-list">\
                            <% _.each( listItems, function( listItem ){ %>\
                            <li id="vertical-nav" value="<%- listItem.key %>"  >\
                                <a>\
                                    <img style="padding-bottom: 5px" src="<%- listItem.icon %>"/>\
                                    <span ><%- listItem.name %></span>\
                                </a>\
                            </li>\
                            <% }); %>\
                        </ul>\
                    </div>'
    });
})