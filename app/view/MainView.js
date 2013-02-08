"use strict";


define(['view/AppTitleBar','model/LeftSidebarModel','components/ListView', 'components/PanelNavigation',
    'view/MainViewStack'], function () {

    App.MainView = Backbone.View.extend({
        tagName: "div",
        className: "MainView",
        events: {},
        initialize: function() {
            this.render();
        },
        render: function() {
            this.el.innerHTML = this.mainLayout;

            var title = this.el.firstChild.firstChild.firstChild.firstChild;
            var titleBar = new App.AppTitleBar({model:this.model});
            title.appendChild(titleBar.el);

            var leftCell = this.el.firstChild.firstChild.childNodes[1].firstChild.firstChild.childNodes[1].firstChild.firstChild.firstChild.firstChild;
            var rightCell = this.el.firstChild.firstChild.childNodes[1].firstChild.firstChild.childNodes[1].firstChild.firstChild.firstChild.childNodes[1];

            // Left menu area
            var panelComp = new App.PanelNavigation();
            panelComp.el.setAttribute("class", "leftMenuBar");
            var listModel = new App.LeftSideBarModel();
            var listView = new App.ListView({model:listModel});
            panelComp.setContent(listView.el) ;
            leftCell.appendChild(panelComp.el);

            // Right content area
            panelComp = new App.PanelNavigation();
            this.mainViewStack = new App.MainViewStack({model:this.model});
            panelComp.setContent(this.mainViewStack.el);
            panelComp.el.setAttribute("class", "horizontalStretch verticalStretch");
            rightCell.appendChild(panelComp.el);

            this.listenTo(listView, 'clicked', this.itemClicked);
        },
        itemClicked: function(key){
            this.mainViewStack.setViewIndex(parseInt(key));
        },

        mainLayout: "<table class='Stretcher' >" +
                    "<tbody class='Stretcher' >" +
                        "<tr class='horizontalStretch'  >" +
                            "<td id='toolBarContainer' class='horizontalStretch'  ></td>" +
                        "</tr>" +
                        "<tr class='Stretcher' >" +
                            "<td class='Stretcher'>" +
                                "<div class='RelativeParent'>" +
                                    "<div class='BorderBackground' ></div>" +
                                    "<div class='MainAppBorder' >" +
                                        "<table class='Stretcher'>" +
                                            "<tbody class='Stretcher'>" +
                                                "<tr class='Stretcher' style='max-height: 100%' >" +
                                                    "<td id='leftContentPanel' class='leftMenuBar verticalStretch' style='padding-right: 4px'></td>"+
                                                    "<td id='rightContentPanel' class='Stretcher'></td>"+
                                                "</tr>"+
                                            "</tbody>"+
                                        "</table>"+
                                    "</div>" +
                                "</div>"+
                            "</td>"+
                        "</tr>"+
                    "</tbody>"+
                    "</table>"

    })
});
