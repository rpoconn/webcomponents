
"use strict";


define(function() {

    // Grid view, uses the YUI DataTable.
    var Y = new YUI();
    Y.use(['datatable-scroll','datatable-sort'], function() {

        App.GridView = Backbone.View.extend({
            tagName: "div",
            className: "horizontalStretch verticalStretch yui3-skin-sam GridView",
            events: { },
            initialize: function() {
                this.el.setAttribute('cellpadding', 0);
                this.el.setAttribute('cellspacing', 0);
                this.listenTo(this.model, "change:items", this.render);
                this.listenTo(this.model, "change:columns", this.render);
                this.render.apply(this);
            },
            render: function() {
                while(this.el.children.length) {
                    this.el.removeChild(this.el.children[0]);
                }
                if (this.model.has('items') && this.model.has('columns')) {
                    var items = this.model.get('items');
                    var columns = this.model.get('columns');
                    if (items && columns) {

                        var table = new Y.DataTable({
                            columns: columns,
                            data: items,
                            width:"100%"
                        });
                        //var compiledList = _.template(this.template, {gridRows:items, gridCols:columns});
                        table.render(this.el);
                    }
                }
            }
        });
    })
})


