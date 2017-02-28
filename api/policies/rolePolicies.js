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
        if (req.session.role == 1){
            return next();
        }

        return res.redirect('/home');
    }
    return res.redirect('/');
};
