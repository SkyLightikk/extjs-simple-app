Ext.define('study.model.PersonModel', {
    extend: 'Ext.data.Model',

    fields: [
        /*
        The fields for this model. This is an Array of Ext.data.field.Field definition objects or simply the field name.
        If just a name is given, the field type defaults to auto.  For example:

         */

        {name: 'name', type: 'string'},
        {name: 'lastName', type: 'string'},
        {name: 'date', type: 'date', dateFormat: 'd/m/Y'},
        {name: 'positionId', type: 'int'}
    ]

    /*
    Uncomment to add validation rules
    validators: {
        age: 'presence',
        name: { type: 'length', min: 2 },
        gender: { type: 'inclusion', list: ['Male', 'Female'] },
        username: [
            { type: 'exclusion', list: ['Admin', 'Operator'] },
            { type: 'format', matcher: /([a-z]+)[0-9]{2,3}/i }
        ]
    }
    */

    /*
    Uncomment to add a rest proxy that syncs data with the back end.
    proxy: {
        type: 'rest',
        url : '/users'
    }
    */
});