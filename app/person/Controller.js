Ext.define('study.person.Controller', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.person-controller',

    requires: [
        'study.person.PopUp'
    ],

    renderPosition: function (val) {
        var positionStore = this.getStore('positionStore');
        return positionStore.getById(val).get('name');
    },
    onSelect: function (_this, record, row, column, eOpts) {
        var vm = this.getViewModel();
        if (column === 4) {
            var positionId = record.get('positionId');
            vm.set('positionId', positionId);
            var popUp = Ext.create('study.person.PopUp');
            popUp.show();
        } else if (column === 2) {
            vm.set('editLastNameNow', true);
            var recordLastName = record.get('lastName');
            vm.set('lastName', recordLastName);
        }


    },
    onSavePosition: function () {
        var positionId = this.getViewModel().get('positionId'),
            selected = this.lookupReference('person-grid').getSelectionModel().getSelected(),
            recordId = selected.items[0].getId(),
            store = Ext.getStore('person'),
            record = store.getById(recordId);
        record.set('positionId', positionId);
        this.lookupReference('popupPosition').close();
        this.lookupReference('popupPosition').destroy();

    },
    onSaveLastName: function () {
        var lastName = this.getViewModel().get('lastName'),
            selected = this.lookupReference('person-grid').getSelectionModel().getSelected(),
            recordId = selected.items[0].getId(),
            store = Ext.getStore('person'),
            record = store.getById(recordId);
        record.set('lastName', lastName);
        this.getViewModel().set('editLastNameNow', false);
    }
});