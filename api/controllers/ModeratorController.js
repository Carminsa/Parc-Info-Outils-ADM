/**
 * ModeratorController
 *
 * @description :: Server-side logic for managing Moderators
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

    index: function (req, res) {

        Department.find({}).exec(function(err, dep){
            return res.view('modo/index', {depart : dep});
        });
    },

    show: function(req, res){
        Computer.find({
            department : req.param('id')
        }).populate('department').exec(function(err, cpu){
            return res.view('modo/show', {data : cpu})
        });

    },


    /**
     * `ModeratorController.create()`
     */
    create: function (req, res) {
        return res.json({
            todo: 'create() is not implemented yet!'
        });
    },

    /**
     * `ModeratorController.edit()`
     */
    edit: function (req, res) {
        return res.json({
            todo: 'edit() is not implemented yet!'
        });
    },


    /**
     * `ModeratorController.delete()`
     */
    delete: function (req, res) {
        return res.json({
            todo: 'delete() is not implemented yet!'
        });
    }
};

