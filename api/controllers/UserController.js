// var passwordHash = require('password-hash');

module.exports = {

    index: function (req, res) {
        return res.view('index/index', {error : err = null });
    },


    login: function(req, res){

        // var hash = passwordHash.generate(req.body.password);
        // console.log(hash);

        User.find({
            login: req.body.login,
            password: req.body.password
        }).exec(function (err, user) {
            if (user.length === 0) {
                return res.view('index/index', {error: "Erreur login/mot de passe"});
            } else {
                req.session.userId = user[0].id;
                req.session.userLogin = user[0].login;
                req.session.role = user[0].role;
                req.session.save();
                return res.redirect('/home');
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

        // var hash = bcrypt.hashSync(req.body.password, null, null);
        // var hashedPassword = passwordHash.generate(req.body.password);

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
                req.flash('error', 'true');
                return res.redirect('back');
            }else {
                return res.view('index/index', {error : err = null });
            }
        });
    },
};

