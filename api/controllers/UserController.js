/**
 * UserController
 *
 * @description :: Server-side logic for managing Users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {



    /**
     * `UserController.index()`
     */
    index: function (req, res) {
        return res.view('index/index');
    },


    /**
     * `UserController.create()`
     */
    create: function (req, res) {
        return res.view('index/register', {error : err = null });
    },


    insert: function (req, res){

        User.create({
            login : req.body.login,
            password : req.body.password,
            firstname : req.body.firstname,
            lastname : req.body.lastname,
            phone : req.body.phone,
            mail: req.body.mail,
        }).exec(function (err, newUser) {

            return res.view('index/register', {error : err.ValidationError});
        });
    },


    /**
     * `UserController.show()`
     */
    show: function (req, res) {
        return res.json({
            todo: 'show() is not implemented yet!'
        });
    },


    /**
     * `UserController.edit()`
     */
    edit: function (req, res) {
        return res.json({
            todo: 'edit() is not implemented yet!'
        });
    },


    /**
     * `UserController.delete()`
     */
    delete: function (req, res) {
        return res.json({
            todo: 'delete() is not implemented yet!'
        });
    }
};

