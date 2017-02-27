/**
 * SavController
 *
 * @description :: Server-side logic for managing Savs
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {


    index: function (req, res) {
        Sav.find({}).populate('foreign_key').exec(function(err, sav){
            console.log(sav);
            return res.view('SAV/index', {savs : sav});
        });
    },


    create: function (req, res) {
        return res.json({
            todo: 'create() is not implemented yet!'
        });
    },


    /**
     * `SavController.show()`
     */
    show: function (req, res) {
        return res.json({
            todo: 'show() is not implemented yet!'
        });
    },


    /**
     * `SavController.edit()`
     */
    edit: function (req, res) {
        return res.json({
            todo: 'edit() is not implemented yet!'
        });
    },


    /**
     * `SavController.delete()`
     */
    delete: function (req, res) {
        return res.json({
            todo: 'delete() is not implemented yet!'
        });
    }
};

