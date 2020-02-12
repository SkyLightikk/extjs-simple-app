Ext.define('study.login.Controller', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.login',

    requires: [
        'study.person.View'
    ],

    onShow: function () {
        var login = localStorage.getItem("login"),
            password = localStorage.getItem("password");
        if (!login || !password) {
            return;
        }
        this.getViewModel().set('login', login);
        this.getViewModel().set('password', password);
    },

    onLoginClick: function () {
        var vm = this.getViewModel(),
            logPass = 'admin',
            login = vm.get('login'),
            password = vm.get('password');

        if (login === logPass && password === logPass) {
            vm.set('wrongUserOrPassword', false);
            var checkboxRememberMe = this.lookupReference('rememberMe');

            if (checkboxRememberMe.value === true) {
                localStorage.setItem("login", login);
                localStorage.setItem("password", password);
            } else {
                localStorage.removeItem("login");
                localStorage.removeItem("password");
            }

            // Remove Login Window
            this.getView().destroy();

            // Add the main view to the viewport
            Ext.create({
                xtype: 'main-panel'
            });
        } else {
            this.lookupReference('loginForm').getForm().reset();
            vm.set('wrongUserOrPassword', true);
            Ext.defer(function () {
                    this.getViewModel().set('wrongUserOrPassword', false);
                },
                1500,
                this);
        }

    }
});