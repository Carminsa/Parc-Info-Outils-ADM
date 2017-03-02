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
            from : req.body.from,
            in : req.body.in,
            firstname : req.body.firstname,
            lastname : req.body.lastname,
            adress : req.body.adress,
            town : req.body.town,
            email : req.body.email,
            phone : req.body.phone,
            expiration : req.body.date,
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

    profil: function(req, res){
        User.find({id : req.session.userId}).populate('department').exec(function(err, user){
            Department.find({}).exec(function(err, dp){
                return res.view('home/edit', {users : user, dp : dp});
            });
        });
    },

    update_user: function(req, res){
        User.update({id : req.session.userId},{
            login: req.body.login,
            firstname : req.body.firstname,
            lastname : req.body.lastname,
            phone: req.body.phone,
            mail : req.body.mail,
            department : req.body.department
        }).exec(function(err, success){
            if (err){
                req.flash('error', 'true');
                return res.redirect('back');
            }
            return res.view('home/index');
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

