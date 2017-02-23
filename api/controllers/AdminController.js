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
        return res.json({
            todo: 'create() is not implemented yet!'
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

