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
            role: {'!' : 1}
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
            console.log(user);
            return res.view('admin/edit_user', {users: user});
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

