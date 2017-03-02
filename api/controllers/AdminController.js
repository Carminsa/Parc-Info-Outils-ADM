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
            garantie: req.body.garant,
        }).exec(function(err, computer){
            if(err || computer.length === 0){
                return res.view('admin/create', {error: err.ValidationError});
            }
            return res.view('admin/index',{error : err = null });
        });
    },

    all_cpu: function(req, res){
        Computer.find({}).populate('department').exec(function(err, computers){
            return res.view('admin/computers', {computer : computers});
        });
    },

    show_cpu: function(req, res){
        Computer.find({
            id : req.param('id')
        }).populate('department').exec(function(err, cpu){
            if (!cpu || cpu.length === 0) {
                return res.redirect('..');
            }
            Department.find({}).exec(function(err, dep){
                console.log(dep);
                return res.view('admin/edit_cpu', {computer: cpu, error : null, dep : dep});
            });

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

    update_cpu: function(req, res){

        Computer.update(
            {id : req.body.id},
            { serial : req.body.serial,
                state : req.body.state,
                os : req.body.os,
                usage : req.body.usage,
                garantie: req.body.garant,
                department: req.body.department,
            }).exec(function(err, computer){
            if (err || computer.length === 0)
            {
                console.log(err);
                req.flash('error', 'true');
                return res.redirect('back');
            }
            return res.redirect('/computers');
        });
    },

    edit: function (req, res) {

        Computer.update({
            id : req.param('id')
        },{SAV: 1}).exec(function(err, computer){
            if (err || computer.lenght === 0){}
        });

        Sav.create({
            foreign_key: req.param('id'),
        }).exec(function(err, ok){
            console.log(err);
        });

        return res.redirect('/computers');
    },

    back: function (req, res) {
        Computer.update({
            id : req.param('id')
        },{SAV: 0}).exec(function(err, computer){
        });
        return res.redirect('/computers');
    },

    cheque: function(req, res){
        User.find({}).populate('cheque').exec(function(err, user){
            console.log(user[0]);
            return res.view('admin/cheque', {users : user});
        });
    }

};

