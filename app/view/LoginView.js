"use strict";


define(function () {

App.LoginView = Backbone.View.extend({
    tagName: "div",
    className: "LoginView",
    events: {},
    initialize: function() {
        this.render.bind(this)();
    },
    render: function() {
        var layoutDiv = this.el;
        var table = document.createElement("table");
        table.setAttribute("class", "LoginTable");
        var loginButton = document.createElement('input');
        loginButton.setAttribute('type','button');
        loginButton.setAttribute('value','Login');
        loginButton.addEventListener("click", this.onLoginClicked.bind(this));

        this.usernameField = document.createElement('input'); // cls:"whiteText", fieldLabel: 'Login:', height:25 });
        this.passwordField = document.createElement('input'); // Ext.create(Ext.form.field.Text, { cls:"whiteText", fieldLabel: 'Password', height:25});
        this.usernameField.setAttribute('type', "text");
        this.passwordField.setAttribute('type', "text");

        var row0 = this.createRowItem();
        var row1 = this.createRowItem();
        var row2 = this.createRowItem();
        var row3 = this.createRowItem();
        var row4 = this.createRowItem();

        row0.setAttribute("height", "50%");
        row1.appendChild(this.createCellItem(this.createSpanItem("Username:", "LoginFormField")));
        row1.appendChild(this.createCellItem(this.usernameField));
        row2.appendChild(this.createCellItem(this.createSpanItem("Password:", "LoginFormField")));
        row2.appendChild(this.createCellItem(this.passwordField));
        row3.appendChild(this.createCellItem(this.createSpanItem("")));
        var buttonCell = this.createCellItem(loginButton)
        buttonCell.setAttribute("class", "LoginButton");
        row3.appendChild(buttonCell);
        row4.setAttribute("height", "50%");
        var appTitle = this.createSpanItem("User Messages Console");
        appTitle.setAttribute("class", "AppTitle");
        row1.appendChild(this.createCellItem(appTitle));

        table.appendChild(row0);
        table.appendChild(row1);
        table.appendChild(row2);
        table.appendChild(row3);
        table.appendChild(row4);

        layoutDiv.appendChild(table);

    },

    createRowItem: function() {
        return document.createElement("tr");
    },

    createCellItem: function(contents) {
        var cell = document.createElement("td");
        cell.appendChild(contents);
        return cell;
    },

    createSpanItem: function(label, styleClass) {
        var span = document.createElement("span");
        span.setAttribute("class", styleClass ? styleClass : "");
        span.textContent = label;
        return span;
    },

    onLoginClicked: function(event) {
        var user = this.usernameField.value;
        var pw = this.passwordField.value;
        this.trigger("login", user, pw);
    }
});

});


