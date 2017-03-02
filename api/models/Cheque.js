/**
 * Cheque.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

    attributes: {
        id: {
            type: 'integer',
            primaryKey: true,
            autoIncrement: true
        },

        number : {
            type : 'string',
            required : true,
            unique : true
        },

        expiration :  {
            type : 'datetime',
            required : true,
        },

        name : {
            type : 'string',
            required : true
        },
        amount : {
            type : 'integer',
            required : true
        },

        id_user: {
            type : 'integer',
            model : 'user'
        }
    }
};

