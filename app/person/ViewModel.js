Ext.define('study.person.ViewModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.person-viewModel',

    requires: [
        'study.model.PersonModel',
        'study.store.Person',
        'study.store.Position'
    ],
    data: {
        positionId: null,
        lastName: null,
        editLastNameNow: false
    },

    stores: {
        gridStore: {
            model: 'study.model.PersonModel',
            type: 'person'
        },
        positionStore: {
            type: 'position-store'
        }
    },


});