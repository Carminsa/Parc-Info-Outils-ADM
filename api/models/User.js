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
            // required: true,
            autoIncrement: true
        },
        login :{
            type: "string",
            unique : true,
            required : true
        },
        password : {
            type : "string",
            required : true,
            minLength: 3
        },
        firstname : {
            type : "string",
            required : true
        },
        lastname : {
            type : "string",
            required : true
        },
        phone : {
            type : "integer",
            required : true
        },
        mail : {
            type: "string",
            unique : true,
            required : true
        },
        role : {
            type : "string",
            defaultsTo : "0"
        }
    }
};

