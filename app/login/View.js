Ext.define('study.login.View', {
    extend: 'Ext.window.Window',
    xtype: 'login',

    requires: [
        'study.login.Controller',
        'study.login.ViewModel'
    ],

    controller: 'login',
    viewModel: 'login',
    bodyPadding: 10,
    title: 'Вход',
    closable: false,
    autoShow: true,
    defaultFocus: 'textfield',
    defaultButton: 'okButton',

    items: {
        xtype: 'form',
        reference: 'loginForm',
        items: [{
            xtype: 'textfield',
            name: 'username',
            fieldLabel: 'Логин',
            allowBlank: false,
            bind: {
                value: '{login}'
            }
        }, {
            xtype: 'textfield',
            name: 'password',
            inputType: 'password',
            fieldLabel: 'Пароль',
            allowBlank: false,
            bind: {
                value: '{password}'
            }
        }, {
            fieldLabel: 'Запомнить меня',
            xtype: 'checkbox',
            reference: 'rememberMe',
            hideEmptyLabel: false,
            disabled: true,
            formBind: true
        }, {
            xtype: 'displayfield',
            hideEmptyLabel: false,
            value: '<span style="color: red; ">Ошибка в логине или пароле</span>',
            bind: {
                hidden: '{!wrongUserOrPassword}'
            }
        }],
        buttons: [{
            reference: 'okButton',
            text: 'Войти',
            formBind: true,
            listeners: {
                click: 'onLoginClick'
            }
        }]
    },
    listeners: {
        show: 'onShow'
    }

});