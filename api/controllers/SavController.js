/**
 * SavController
 *
 * @description :: Server-side logic for managing Savs
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

    index: function (req, res) {
        Sav.find({}).populate('foreign_key').exec(function(err, sav){
            return res.view('SAV/index', {savs : sav});
        });
    },

};

