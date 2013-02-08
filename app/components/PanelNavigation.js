"use strict";


// This class contains the background view of the application, and manages the current viewstate of the application.
// This class's model is the ApplicationModel.
define(function() {

    App.PanelNavigation = Backbone.View.extend({
        tagName: "table",
        className: "panel-container panel-navigation verticalStretch floatLeft",
        events: { },
        initialize: function() {
            this.render();
        },
        content:null,
        setContent: function(contentNode) {
            var td = document.createElement("td");
            td.setAttribute("class", "horizontalStretch verticalStretch");
            td.appendChild(contentNode)
            this.content = td;
            this.render();
        },
        name:'Panel',
        render: function() {
            var template = _.template(this.template, {title:this.panel});
            this.el.innerHTML = template;
            if (this.content) {
                this.el.firstElementChild.children[1].appendChild(this.content);
            }
        },
        template:
            '<tr class="horizontalStretch" >\
                <td class="panel-titlebar horizontalStretch" >\
                    <span class="titlebar-label"><%= title %></span>\
                    <!--        <span class="vmw-titlebar-close-icon"><a href=""></a></span>   --> <!--Alternate to using Pin icon-->\
                    <span class="titlebar-pin-icon"><a href=""></a></span>\
                    <!--		<span class="vmw-titlebar-minimize-icon"><a class="disabled" href=""></a></span>-->\
                    <!--        <span class="vmw-titlebar-edit-icon"><a href=""></a></span>-->\
                </td>\
             </tr>\
             <tr class="panel-body horizontalStretch verticalStretch"> \
             </tr>'

    });
})

