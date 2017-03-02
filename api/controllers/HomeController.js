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

        if (req.session.role == 3 ){ return res.redirect('/standard');}
        Computer.find({}).populate('department').exec(function(err, cpu) {
            return res.view('home/show', {data: cpu});
        });
    },

    standard : function(req, res){
        Computer.find({department : req.session.department}).populate('department').exec(function(err, cpu) {
            return res.view('home/show', {data: cpu});
        });
    }


};

