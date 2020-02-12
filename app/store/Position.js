Ext.define('study.store.Position', {
    extend: 'Ext.data.Store',
    alias: 'store.position-store',

    storeId: 'position-store',



    fields: [
        {name: 'id', type: 'int'},
        {name: 'name',  type: 'string'}
    ],
    data : [
        {id: 1,    name: 'Ученик'},
        {id: 2,    name: 'Учитель'},
        {id: 3,    name: 'Директор'},
    ]
});