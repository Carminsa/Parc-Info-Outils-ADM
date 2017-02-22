/**
 * sessionAuth
 *
 * @module      :: Policy
 * @description :: Simple policy to allow any authenticated user
 *                 Assumes that your login action in one of your controllers sets `req.session.authenticated = true;`
 * @docs        :: http://sailsjs.org/#!/documentation/concepts/Policies
 *
 */
module.exports = function(req, res, next) {

    if (req.session.userId) {
      console.log("mon role est ici => " + req.session.role);
        console.log(1);
        if (req.session.role == 1){
            console.log(2);

            return next();
        }
        console.log(3);

        return res.redirect('/home');
    }
    console.log(4);

    return res.redirect('/');
};
