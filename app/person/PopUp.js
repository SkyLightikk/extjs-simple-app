Ext.define('study.person.PopUp', {
    extend: 'Ext.window.Window',
    xtype: 'popup',
    alias: 'widget.popup',
    title: 'Редактирование',
    reference: 'popupPosition',

    requires: [
        'study.store.Position'
    ],
    layout: 'vbox',
    items: [{
        xtype: 'combobox',
        fieldLabel: 'Должность:',
        margin: '0 0 0 10',
        store: 'position-store',
        queryMode: 'local',
        displayField: 'name',
        valueField: 'id',
        // editable: false,
        allowBlank: false,
        tpl: Ext.create('Ext.XTemplate',
            '<ul class="x-list-plain"><tpl for=".">',
            '<li role="option" class="x-boundlist-item">{id}. {name}</li>',
            '</tpl></ul>'
        ),
        displayTpl: Ext.create('Ext.XTemplate',
            '<tpl for=".">',
            '{name}',
            '</tpl>'
        ),
        bind: {
            value: '{positionId}'
        }
    }, {
        xtype: 'button',
        text: "Сохранить",
        handler: 'onSavePosition'
    }]
});