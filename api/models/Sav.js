/**
 * SAV.js
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

        sav_number : {
            type : 'integer',
        },

        id_computer: {
            type: 'integer',
            required : true
        }
    }
};

