/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes map URLs to views and controllers.
 *
 * If Sails receives a URL that doesn't match any of the routes below,
 * it will check for matching files (images, scripts, stylesheets, etc.)
 * in your assets directory.  e.g. `http://localhost:1337/images/foo.jpg`
 * might match an image file: `/assets/images/foo.jpg`
 *
 * Finally, if those don't match either, the default 404 handler is triggered.
 * See `api/responses/notFound.js` to adjust your app's 404 logic.
 *
 * Note: Sails doesn't ACTUALLY serve stuff from `assets`-- the default Gruntfile in Sails copies
 * flat files from `assets` to `.tmp/public`.  This allows you to do things like compile LESS or
 * CoffeeScript for the front-end.
 *
 * For more information on configuring custom routes, check out:
 * http://sailsjs.org/#!/documentation/concepts/Routes/RouteTargetSyntax.html
 */

module.exports.routes = {

    /***************************************************************************
     *                                                                          *
     * Make the view located at `views/homepage.ejs` (or `views/homepage.jade`, *
     * etc. depending on your default view engine) your home page.              *
     *                                                                          *
     * (Alternatively, remove this and add an `index.html` file in your         *
     * `assets` directory)                                                      *
     *                                                                          *
     ***************************************************************************/

    // INDEX & USER CONTROLLER ********************************************************************************************************

    'get /': {
        controller : 'UserController',
        action : 'index',
        locals: {
            layout: 'layout_disconnected'
        }
    },

    'get /register' : {
        controller : 'UserController',
        action : 'create',
        locals: {
            layout: 'layout'
        }
    },

    'post /insert' : {
        controller : 'UserController',
        action : 'insert',
        locals: {
            layout: 'layout'
        }
    },

    'post /login' : {
        controller : 'UserController',
        action : 'login',
        locals: {
            layout: 'layout'
        }
    },

    'get /logout' : {
        controller : 'UserController',
        action : 'logout',
        locals: {
            layout: 'layout_admin'
        }
    },









    // ADMIN CONTROLLER *****************************************************************************************************************************

    'get /index' : {
        controller : 'AdminController',
        action : 'index',
        locals: {
            layout: 'layout_admin'
        }
    },

    'get /users' : {
        controller : 'AdminController',
        action : 'users',
        locals: {
            layout: 'layout_admin'
        }
    },

    'get /users/:id' : {
        controller : 'AdminController',
        action : 'show',
        locals: {
            layout: 'layout_admin'
        }
    },

    'post /update' : {
        controller : 'AdminController',
        action : 'update',
        locals: {
            layout: 'layout_admin'
        }
    },

    'get /add_cpu' : {
        controller : 'AdminController',
        action : 'create',
        locals: {
            layout: 'layout_admin'
        }
    },

    'post /insert_cpu' : {
        controller : 'AdminController',
        action : 'insert_cpu',
        locals : {
            layout : 'layout_admin'
        }
    },

    'get /computers' : {
        controller : 'AdminController',
        action : 'all_cpu',
        locals : {
            layout : 'layout_admin'
        }
    },

    'get /computers/:id' : {
        controller : 'AdminController',
        action : 'show_cpu',
        locals: {
            layout: 'layout_admin'
        }
    },

    'post /update_cpu' :{
        controller : 'AdminController',
        action : 'update_cpu',
        locals: {
            layout: 'layout_admin'
        }
    },

    'get /edit/:id' : {
        controller : 'AdminController',
        action : 'edit',
        locals: {
            layout: 'layout_admin'
        }
    },

    'get /back/:id' :{
        controller : 'AdminController',
        action : 'back',
        locals: {
            layout: 'layout_admin'
        }
    },

    'get /cheque' : {
        controller : 'AdminController',
        action : 'cheque',
        locals: {
            layout: 'layout'
        }
    },







    // SAV CONTROLLER ********************************************************************************************************************

    'get /sav' : {
        controller : 'SavController',
        action : 'index',
        locals: {
            layout: 'layout_admin'
        }
    },









    // MODO CONTROLLER ********************************************************************************************************************

    'get /modo' : {
        controller : 'ModeratorController',
        action : 'index',
        locals: {
            layout: 'layout'
        }
    },

    'get /show/:id' : {
        controller : 'ModeratorController',
        action : 'show',
        locals: {
            layout: 'layout'
        }
    },










    // MAIL CONTROLLER ********************************************************************************************************************************

    'get /mail' : {
        controller : 'MailController',
        action : 'index',
        locals: {
            layout: 'layout'
        }
    },








    // HOME CONTROLLER **********************************************************************************************************************************

    'get /add' : {
        controller : 'HomeController',
        action : 'add',
        locals: {
            layout: 'layout'
        }
    },

    'post /create' : {
        controller : 'HomeController',
        action : 'create',
        locals: {
            layout: 'layout'
        }
    },

    'get /available' : {
        controller : 'HomeController',
        action : 'show',
        locals: {
            layout: 'layout'
        }
    },

    'get /standard' : {
        controller : 'HomeController',
        action : 'standard',
        locals: {
            layout: 'layout'
        }
    },

    'get /profil' : {
        controller : 'HomeController',
        action : 'profil',
        locals: {
            layout: 'layout'
        }
    },

    'post /update_user' : {
        controller : 'HomeController',
        action : 'update_user',
        locals: {
            layout: 'layout'
        }
    },



    // CSV ***************************************************************************************

    'get /export' :  {
        controller : 'CsvController',
        action : 'csv',
        locals: {
            layout: 'layout'
        }
    },





    /***************************************************************************
     *                                                                          *
     * Custom routes here...                                                    *
     *                                                                          *
     * If a request to a URL doesn't match any of the custom routes above, it   *
     * is matched against Sails route blueprints. See `config/blueprints.js`    *
     * for configuration options and examples.                                  *
     *                                                                          *
     ***************************************************************************/

};
