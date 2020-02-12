Ext.define('study.login.ViewModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.login',

    data: {
        login: null,
        password: null,
        wrongUserOrPassword: false
    }
});