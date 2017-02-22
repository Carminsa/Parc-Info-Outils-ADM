/**
 * HomeController
 *
 * @description :: Server-side logic for managing Homes
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {



    /**
     * `HomeController.index()`
     */
    index: function (req, res) {
      // console.log(req.session);
        return res.view('home/index');
    },


    /**
     * `HomeController.create()`
     */
    create: function (req, res) {
        return res.json({
            todo: 'create() is not implemented yet!'
        });
    },


    /**
     * `HomeController.show()`
     */
    show: function (req, res) {
        return res.json({
            todo: 'show() is not implemented yet!'
        });
    },


    /**
     * `HomeController.edit()`
     */
    edit: function (req, res) {
        return res.json({
            todo: 'edit() is not implemented yet!'
        });
    },


    /**
     * `HomeController.delete()`
     */
    delete: function (req, res) {
        return res.json({
            todo: 'delete() is not implemented yet!'
        });
    }
};

