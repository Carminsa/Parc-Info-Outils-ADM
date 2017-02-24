/**
 * Computer.js
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
        serial :{
            type: "string",
            unique : true,
            required : true,
            regex: /^[a-zA-Z0-9-,\u00E0-\u00FC\s]+$/
        },
        state : {
            type : "string",
            required : true,
            regex: /^[a-zA-Z0-9-,\u00E0-\u00FC\s]+$/
        },
        os : {
            type : "string",
            required : true,
            regex: /^[a-zA-Z0-9-,\u00E0-\u00FC\s]+$/
        },
        usage : {
            type : "string",
            required : true,
            regex: /^[a-zA-Z0-9-,\u00E0-\u00FC\s]+$/
        },
        SAV : {
            type : "string",
            required : true,
            defaultsTo : "0"
        },
        garantie : {
            type: "string",
            required : true,
            regex: /^[a-zA-Z0-9-,\u00E0-\u00FC\s]+$/
        },


    }
};

