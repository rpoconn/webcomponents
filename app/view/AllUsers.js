"use strict";

// All depots view
define(['components/GridView'], function() {
    App.AllUsers = Backbone.View.extend({
        tagName: "div",
        className: "AllUsers",
        events: { },
        initialize: function() {
            this.gridModel = new Backbone.Model();
            this.listenTo(this.model, "change:users", this.onItemsChange);
            this.listenTo(this.model, "change:columns", this.onColumnsChange);

            var columns = [{ key:"email", label:"email", sortable:true },
                { key: "name", label: "Name", sortable:true },
                { key: "status", label:"Status", sortable:true } ];

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
            this.gridModel.set('items', this.model.get('users'));
        },
        render: function() {
            this.el.appendChild(this.grid.el);
            this.onColumnsChange();
            this.onItemsChange();
        }
    });
});
