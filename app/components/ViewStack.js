"use strict";

define(function() {

    App.ViewStack = Backbone.View.extend({
        tagName: "div",
        className: "horizontalStretch verticalStretch",
        events: { },
        viewIndex: -1,
        currentItem: null,
        initialize: function() {
            this.render.apply(this);
        },
        setViewIndex: function(index) {
            this.viewIndex = index;
            if (this.currentItem) {
                this.el.removeChild(this.currentItem);
            }
            if (this.items && this.viewIndex >= 0) {
                var items = this.items;
                if (items.length) {
                    if ((items.length-1) < this.viewIndex) {
                        throw "View index out of range";
                    }
                    this.currentItem = items[this.viewIndex];
                    this.el.appendChild(this.currentItem);
                }
            }
        },
        setViewItems: function(items) {
            this.items = items;
            this.render();
        },
        render: function() {
            this.setViewIndex(this.viewIndex);
        }
    });
})


