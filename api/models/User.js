/**
 * User.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

    attributes: {
        login :{
            type: "string",
            unique : true,
            required : true
        },
        password : {
            type : "string",
            required : true
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
            type : int,
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

