var bcrypt = require('bcrypt');
const saltRounds = 10;
var salt = bcrypt.genSaltSync(saltRounds);

module.exports = {

    index: function (req, res) {
        return res.view('index/index');
    },


    login: function(req, res){

        var hash = bcrypt.hashSync(req.body.password, salt);

        User.find({
            login: req.body.login,
            password: hash
        }).exec(function (err, user) {
            if (user.length >= 0) {
                return res.view('index/index', {error: "Erreur login/mot de passe"});
                // return res.serverError(err);
            } else {
                console.log('test');
                console.log(user)
            }
        });
    },


    create: function (req, res) {
        return res.view('index/register', {error : err = null });
    },


    insert: function (req, res){

        var hash = bcrypt.hashSync(req.body.password, salt);

        User.create({
            login : req.body.login,
            password : hash,
            firstname : req.body.firstname,
            lastname : req.body.lastname,
            phone : req.body.phone,
            mail: req.body.mail,
        }).exec(function (err) {
            if (err) {
                return res.view('index/register', {error: err.ValidationError});
            }else {
                return res.view('index/index');
            }
        });
    },


    show: function (req, res) {
        return res.json({
            todo: 'show() is not implemented yet!'
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

