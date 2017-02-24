/**
 * AdminController
 *
 * @description :: Server-side logic for managing Admins
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

    index: function (req, res) {
        return res.view('admin/index', {error : err = null });
    },

    users: function (req, res){
        User.find({
            login: {'!' : 'root'}
        }).exec(function(err, user){
            return res.view('admin/users', {users : user});
        });
    },

    create: function (req, res) {
        return res.view('admin/create', {error : null});
    },

    insert_cpu: function(req, res){
        Computer.create({
            serial : req.body.serial,
            state : req.body.state,
            os : req.body.os,
            usage : req.body.usage,
            SAV : req.body.sav,
            garantie: req.body.garant,
        }).exec(function(err, computer){
            console.log(err);
            console.log(computer);
        });
    },

    show: function (req, res) {
        User.find({
            id : req.param('id')
        }).exec(function(err, user){
            if (!user || user.length === 0) {
                return res.redirect('..');
            }
            return res.view('admin/edit_user', {users: user, error : null});
        });
    },

    update: function(req, res){
        User.update(
            {id : req.body.id},
            { login : req.body.login,
                firstname : req.body.firstname,
                lastname : req.body.lastname,
                phone : req.body.phone,
                mail: req.body.mail,
                role : req.body.role,

            }).exec(function(err, user){
            if (err || user.length === 0)
            {
                req.flash('error', 'true');
                return res.redirect('back');
            }
            return res.redirect('/users');
        });
    },

    edit: function (req, res) {
        return res.json({
            todo: 'edit() is not implemented yet!'
        });
    },

    delete: function (req, res) {
        return res.json({
            todo: 'delete() is not implemented yet!'
        });
    }
};

