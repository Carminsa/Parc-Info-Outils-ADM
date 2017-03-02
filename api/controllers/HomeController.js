/**
 * HomeController
 *
 * @description :: Server-side logic for managing Homes
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

    index: function (req, res) {
        return res.view('home/index');
    },

    add: function(req, res){
        return res.view('home/add', {error : false});
    },

    create: function(req, res){
        Cheque.create({
            number : req.body.number,
            expiration : req.body.date,
            name : req.body.name,
            amount : req.body.amount,
            id_user : req.session.userId,
        }).exec(function (err) {
            if (err) {
                console.log(err);
                return res.view('home/add', {error: err.ValidationError});
            }else {
                return res.view('home/index', {error : err = null });
            }
        });
    },

    show: function (req, res) {
        Computer.find({}).populate('department').exec(function(err, cpu){
            console.log(cpu);
        });
    },


    /**
     * `HomeController.edit()`
     */
    edit: function (req, res) {
        return res.json({
            todo: 'edit() is not implemented yet!'
        });
    },


    /**
     * `HomeController.delete()`
     */
    delete: function (req, res) {
        return res.json({
            todo: 'delete() is not implemented yet!'
        });
    }
};

