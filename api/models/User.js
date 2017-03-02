/**
 * User.js
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
        login :{
            type: "string",
            unique : true,
            required : true,
            regex: /^[\w&.\-]*$/
        },
        password : {
            type : "string",
            required : true,
            minLength: 3
        },
        firstname : {
            type : "string",
            required : true,
            regex: /^[a-zA-Z0-9\u00E0-\u00FC\s]+$/
        },
        lastname : {
            type : "string",
            required : true,
            regex: /^[a-zA-Z0-9\u00E0-\u00FC\s]+$/
        },
        phone : {
            type : "integer",
            required : true,
            // regex: /[^0-9]/,
        },
        mail : {
            type: "string",
            unique : true,
            required : true,
            email : true
        },
        role : {
            type : "string",
            defaultsTo : "0"
        },

        department : {
            type : 'integer',
            model : 'department',
            required : true,
            regex: /^[a-zA-Z0-9\u00E0-\u00FC\s]+$/
        },

        cheque : {
            collection : 'cheque',
            via : 'id_user',
            // columnName : 'id_department',
        }
    }
};

