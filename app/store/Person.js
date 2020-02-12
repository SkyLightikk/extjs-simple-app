Ext.define('study.store.Person', {
    extend: 'Ext.data.Store',
    alias: 'store.person',
    storeId: 'person',

    requires: [
        'study.model.PersonModel'
    ],
    model: 'study.model.PersonModel',

    // fields: [
    //     'name', 'lastName', 'date', 'positionId'
    // ],

    data: {
        items: [
            {name: 'Василий', lastName: 'Петров', date: "11/02/1978", positionId: 1},
            {name: 'Николай', lastName: 'Ветров', date: "25/12/1990", positionId: 2},
            {name: 'Констанин', lastName: 'Андреев', date: "10/01/2000", positionId: 3},
            {name: 'Дмитрий', lastName: 'Перегудов', date: "14/05/1965", positionId: 1}
        ]
    },

    proxy: {
        type: 'memory',
        reader: {
            type: 'json',
            rootProperty: 'items'
        },
        writer: {
            type: 'json',
            writeAllFields: true
        }
    },
    autoSync: true
});
