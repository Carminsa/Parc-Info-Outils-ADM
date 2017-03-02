// var passwordHash = require('password-hash');
var Passwords = require('machinepack-passwords');


module.exports = {

    index: function (req, res) {
        return res.view('index/index', {error : err = null });
    },


    login: function(req, res){
        User.find({
            login: req.body.login,
        }).exec(function (err, user) {
            if (user.length > 0 ){
                Passwords.checkPassword({
                    passwordAttempt: req.body.password,
                    encryptedPassword: user[0].password,
                }).exec({
                    error: function (err) {
                        console.log(err);
                    },
                    incorrect: function () {
                        return res.view('index/index', {error: "Erreur dans le mot de passe"});
                    },
                    success: function () {
                        req.session.userId = user[0].id;
                        req.session.userLogin = user[0].login;
                        req.session.role = user[0].role;
                        req.session.department = user[0].department;
                        req.session.save();
                        return res.redirect('/home');
                    },
                });
            } else {
                return res.view('index/index', {error: "Le Login n'existe pas"});
            }
        });
    },

    logout: function(req, res) {
        req.session.destroy(function(err) {
            res.redirect('/');
        });
    },


    create: function (req, res) {
        Department.find({}).exec(function(err, department){
            return res.view('index/register', {error : err = null , dp : department});
        });

    },


    insert: function (req, res){
        User.create({
            login : req.body.login,
            password : req.body.password,
            firstname : req.body.firstname,
            lastname : req.body.lastname,
            phone : req.body.phone,
            mail: req.body.mail,
            department: req.body.department,
        }).exec(function (err) {
            if (err) {
                console.log(err);
                req.flash('error', 'true');
                return res.redirect('back');
            }else {
                return res.view('index/index', {error : err = null });
            }
        });
    },
};

