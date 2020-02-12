Ext.define('study.person.View', {
    extend: 'Ext.panel.Panel',
    xtype: 'main-panel',
    alias: 'widget.main-panel',

    controller: 'person-controller',
    viewModel: 'person-viewModel',
    layout: 'column',

    requires: [
        'study.person.Controller',
        'study.person.Grid',
        'study.person.ViewModel'
    ],
    plugins: [
        'viewport'
    ],

    items: [{
        xtype: 'person-grid'
    }, {
            xtype: 'form',
            title: 'Редактирование',

            defaultButton: 'saveButton',

            columnWidth: 0.25,
            layout: 'anchor',
            defaultType: 'textfield',
            bind: {
                hidden: '{!editLastNameNow}'
            },

            items: [{
                padding: '10 10 10 10',
                fieldLabel: 'Фамилия',
                labelAlign: 'top',
                bind: {
                    value: '{lastName}'
                }
            },

            ],
            buttonAlign: 'left',
            buttons: [
                {
                    reference: 'saveButton',
                    text: 'Применить',
                    formBind: true,
                    listeners: {
                        click: 'onSaveLastName'
                    }
                },
                {
                    text: 'Очистить',
                    handler: function () {
                        this.up('form').getForm().reset();
                    }
                }
            ]
        }]
});