Ext.define('study.person.Grid', {
    extend: 'Ext.grid.Panel',
    xtype: 'person-grid',
    alias: 'widget.person-grid',
    reference: 'person-grid',

    requires: [
        'study.store.Position'
    ],

    selModel: {
        selType: 'cellmodel',
        listeners: {
            select: 'onSelect'
        }
    },
    plugins: [
        {
            ptype: 'cellediting',
            clicksToEdit: 1
        },
        {ptype: 'gridfilters'}
    ],

    title: 'Пользователи',

    bind: {
        store: '{gridStore}'
    },

    height: 400,
    columnWidth: 0.315,

    columns: [{
        text: "Пользователь",
        minWidth: 200,
        renderer: function (value, metaData, record) {
            return record.get('name') + " " + record.get('lastName');
        }
    }, {
        text: "Имя",
        dataIndex: "name",
        editor: 'textfield'
    }, {
        text: 'Фамилия',
        dataIndex: 'lastName'
    }, {
        xtype: 'datecolumn',
        text: "Дата",
        dataIndex: "date",
        format: 'm/Y'
    }, {
        text: "Должность",
        dataIndex: 'positionId',
        renderer: 'renderPosition',
        filter: {
            type: 'list',
            store: 'position-store',
            idField: 'id',
            labelField: 'name'
        }

    }]

});