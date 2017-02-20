var bcrypt = require('bcrypt');
const saltRounds = 10;

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

        var salt = bcrypt.genSaltSync(saltRounds);
        var hash = bcrypt.hashSync(req.body.password, salt);

        User.create({
            login : req.body.login,
            password : hash,
            firstname : req.body.firstname,
            lastname : req.body.lastname,
            phone : req.body.phone,
            mail: req.body.mail,
        }).exec(function (err, newUser) {
            if (err) {
                console.log(err.ValidationError);
                return res.view('index/register', {error: err.ValidationError});
            }else {
                return res.view('index/index');
            }
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

