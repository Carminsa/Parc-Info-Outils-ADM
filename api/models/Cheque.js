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

        from : {
            type : 'date',
            required: true
        },

        in : {
            type : 'string',
            required : true,
            regex: /^[a-zA-Z0-9\u00E0-\u00FC\s]+$/
        },

        expiration : {
            type : 'date',
            required: true
        },

        month :  {
            type : 'string',
        },

        year :  {
            type : 'string',
        },

        firstname : {
            type : 'string',
            required : true,
            regex: /^[a-zA-Z0-9\u00E0-\u00FC\s]+$/
        },

        adress : {
            type : 'string',
            required : true,
            regex: /^[a-zA-Z0-9\u00E0-\u00FC\s]+$/
        },

        email :{
            type: "string",
            unique : true,
            required : true,
            email : true
        },

        town : {
            type : 'string',
            required : true,
            regex: /^[a-zA-Z0-9\u00E0-\u00FC\s]+$/
        },

        lastname : {
            type : 'string',
            required : true,
            regex: /^[a-zA-Z0-9\u00E0-\u00FC\s]+$/
        },
        amount : {
            type : 'integer',
            required : true
        },

        phone : {
            type : "string",
            required : true,
            regex: /^(0|\+33)[1-9]([-. ]?[0-9]{2}){4}$/
        },

        id_user: {
            type : 'integer',
            model : 'user'
        },
    }
};

