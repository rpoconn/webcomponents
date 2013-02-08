"use strict";

// All bundles view
define(['components/GridView'], function() {
    App.AllMessages = Backbone.View.extend({
        tagName: "div",
        className: "AllMessages",
        events: { },
        initialize: function() {
            this.gridModel = new Backbone.Model();
            this.listenTo(this.model, "change:messages", this.onItemsChange);
            this.listenTo(this.model, "change:columns", this.onColumnsChange);

            var columns = [{ key:"sender", label:"Sender", sortable:true },
                { key: "text", label: "Text", sortable:true },
                { key: "creationDate", label:"Creation Date", sortable:true }];

            this.model.set("columns", columns);
            this.model.set("items", []);

            this.grid = new App.GridView({model:this.gridModel});
            $(this.grid.el).addClass("Stretcher");
            this.render.apply(this);
        },
        onColumnsChange: function() {
            this.gridModel.set('columns', this.model.get('columns'));
        },
        onItemsChange: function() {
            this.gridModel.set('items', this.model.get('messages'));
        },
        render: function() {
            this.el.appendChild(this.grid.el);
            this.onColumnsChange();
            this.onItemsChange();
        }
    });
});
